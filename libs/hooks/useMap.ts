import { useEffect, useRef, useState } from 'react';
import { listMapsAPI } from '../api/maps';
import useSearch from './useSearch';

function useMap() {
  const { search, name, onChange, onSearch, onKeyPress } = useSearch();
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [maps, setMaps] = useState<MapType[]>([]);
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >('');

  let markers: naver.maps.Marker[] = [];
  let infoWindows: naver.maps.InfoWindow[] = [];

  // List Dorms 클릭 시 해당 위치로 map 중앙 이동
  function markerMove(id: number, title: string, address: string) {
    const targetMap = maps.find((map) => map.id === id);
    const targetMarker = maps.find((map) => map.id === id)?.marker;

    const infoWindow = new naver.maps.InfoWindow({
      content: `<div class="info_container"><div class="icon_circle"><image src="/assets/icon.png" alt="" /></div><div class="info_contents"><div class="title">${title}</div><div class="address">${address}</div></div></div>`,
      borderWidth: 0,
      anchorSize: new naver.maps.Size(10, 2),
      anchorColor: '#5e79fc',
      pixelOffset: new naver.maps.Point(60, -15),
      backgroundColor: 'none',
    });

    if (targetMarker && targetMap) {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        mapRef.current.panTo(targetMarker.getPosition());
        infoWindow.open(mapRef.current, targetMarker);
      }
    }
  }

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
        zoom: 18,
      });

      // 현재 map의 Bound 사각형 지역
      const coords = mapRef.current.getBounds();

      // List API
      listMapsAPI({
        rtlat: coords.maxY(),
        rtlng: coords.maxX(),
        lblat: coords.minY(),
        lblng: coords.minX(),
        search,
      })
        .then((res) => {
          if (!res) return console.log('데이터 없음');

          const data = res;
          let array: MapType[] = [];

          // 마커 목록 생성
          for (let i = 0; i < data.length; i += 1) {
            const otherMarkers = new naver.maps.Marker({
              position: new naver.maps.LatLng(
                data[i].latitude,
                data[i].longitude
              ),
              map: mapRef.current,
            });

            const infoWindow = new naver.maps.InfoWindow({
              content: `<div class="info_container"><div class="icon_circle"><image src="/assets/icon.png" alt="" /></div><div class="info_contents"><div class="title">${data[i].name}</div><div class="address">${data[i].address}</div></div></div>`,
              borderWidth: 0,
              anchorSize: new naver.maps.Size(10, 2),
              anchorColor: '#5e79fc',
              pixelOffset: new naver.maps.Point(60, -15),
              backgroundColor: 'none',
            });

            markers.push(otherMarkers);
            infoWindows.push(infoWindow);
            data[i].marker = new naver.maps.Marker({
              position: new naver.maps.LatLng(
                data[i].latitude,
                data[i].longitude
              ),
            });
            array.push(data[i]);

            // 마커 클릭시 맵 중심 이동 이벤트
            naver.maps.Event.addListener(
              otherMarkers,
              'click',
              async (e: any) => {
                const marker = markers[i];
                const infoWindow = infoWindows[i];

                if (infoWindow.getMap()) {
                  infoWindow.close();
                } else {
                  mapRef.current.panTo(e.coord);
                  infoWindow.open(mapRef.current, marker);
                }
              }
            );
          }

          setMaps(data);
        })
        .catch((e) => {
          console.log(e);
        });

      // 현재 마커 정보 업데이트
      function updateMarkers({
        isMap,
        isMarkers,
      }: {
        isMap: naver.maps.Map;
        isMarkers: naver.maps.Marker[];
      }) {
        const mapBounds: any = isMap.getBounds();
        let marker;
        let position;

        for (let i = 0; i < isMarkers.length; i += 1) {
          marker = isMarkers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            showMarker({ isMap, marker });
          } else {
            hideMarker({ marker });
          }
        }
      }

      // 마커 보여주기
      function showMarker({
        isMap,
        marker,
      }: {
        isMap: naver.maps.Map;
        marker: naver.maps.Marker;
      }) {
        marker.setMap(isMap);
      }

      // 마커 숨기기
      function hideMarker({ marker }: { marker: naver.maps.Marker }) {
        marker.setMap(null);
      }

      // 마우스 드래그 후 놓았을 때 현재 위치 이동, 마커 업데이트
      naver.maps.Event.addListener(mapRef.current, 'dragend', () => {
        setMyLocation({
          latitude: mapRef.current.center._lat,
          longitude: mapRef.current.center._lng,
        });
        updateMarkers({ isMap: mapRef.current, isMarkers: markers });
      });
    }
  }, [myLocation, search]);

  return {
    myLocation,
    maps,
    markerMove,
    search,
    name,
    onChange,
    onSearch,
    onKeyPress,
  };
}

export default useMap;
