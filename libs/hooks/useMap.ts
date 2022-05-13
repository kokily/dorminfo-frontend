import { useEffect, useRef, useState } from 'react';
import { listMapsAPI } from '../api/maps';

function useMap() {
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
  const contentTags = `<div>요기 ${markers[0]}</div>`;

  function markerMove(id: number, e: any) {
    const targetMarker = maps.find((map) => map.id === id)?.marker;
    const infoWindow = new naver.maps.InfoWindow({
      content: contentTags,
      borderWidth: 1,
      anchorSize: new naver.maps.Size(10, 10),
      pixelOffset: new naver.maps.Point(10, -10),
    });

    if (targetMarker) {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        mapRef.current.panTo(targetMarker.getPosition());
        infoWindow.open(mapRef.current, targetMarker);
      }
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.5114496, longitude: 126.9555199 });
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
      });

      const coords = mapRef.current.getBounds();

      listMapsAPI({
        rtlat: coords.maxY(),
        rtlng: coords.maxX(),
        lblat: coords.minY(),
        lblng: coords.minX(),
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
              content: contentTags,
              borderWidth: 1,
              anchorSize: new naver.maps.Size(10, 10),
              pixelOffset: new naver.maps.Point(10, -10),
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

            naver.maps.Event.addListener(otherMarkers, 'click', (e: any) => {
              const marker = markers[i];
              const infoWindow = infoWindows[i];

              if (infoWindow.getMap()) {
                infoWindow.close();
              } else {
                mapRef.current.panTo(e.coord);
                infoWindow.open(mapRef.current, marker);
              }
            });
          }

          setMaps(data);
        })
        .catch((e) => {
          console.log(e);
        });

      // Map Function
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

      function showMarker({
        isMap,
        marker,
      }: {
        isMap: naver.maps.Map;
        marker: naver.maps.Marker;
      }) {
        marker.setMap(isMap);
      }

      function hideMarker({ marker }: { marker: naver.maps.Marker }) {
        marker.setMap(null);
      }

      naver.maps.Event.addListener(mapRef.current, 'dragend', () => {
        setMyLocation({
          latitude: mapRef.current.center._lat,
          longitude: mapRef.current.center._lng,
        });
        updateMarkers({ isMap: mapRef.current, isMarkers: markers });
      });
    }
  }, [myLocation]);

  return {
    myLocation,
    maps,
    markerMove,
  };
}

export default useMap;
