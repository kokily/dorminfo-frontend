import { useEffect, useState } from 'react';
import qs from 'qs';
import client from '../api/client';

function useMap() {
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
  const contentTags = '<div>여기입니다</div>';

  function success(position: any) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    setMyLocation({ latitude: 37.5114496, longitude: 126.9555199 });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [setMyLocation]);

  useEffect(() => {
    // API
    async function getMapsList(query: CoordinateType) {
      const queryString = qs.stringify(query);
      const response = await client.get<MapType[]>(`/dorm/list?${queryString}`);
      return response.data;
    }

    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      let map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
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

      function getClickHandler(seq: number) {
        return () => {
          const marker = markers[seq];
          const infoWindow = infoWindows[seq];

          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        };
      }

      const coords = map.getBounds();

      getMapsList({
        rtlat: coords.maxX(),
        rtlng: coords.maxY(),
        lblat: coords.minX(),
        lblng: coords.minY(),
      })
        .then((res) => {
          const data = res;
          setMaps(data);

          // 마커 목록 생성
          for (let i = 0; i < data.length; i += 1) {
            const otherMarkers = new naver.maps.Marker({
              position: new naver.maps.LatLng(
                data[i].latitude,
                data[i].longitude
              ),
              map,
            });

            const infoWindow = new naver.maps.InfoWindow({
              content: contentTags,
              borderWidth: 1,
              anchorSize: new naver.maps.Size(10, 10),
              pixelOffset: new naver.maps.Point(10, -10),
            });

            markers.push(otherMarkers);
            infoWindows.push(infoWindow);
          }
        })
        .catch((e) => {
          console.log(e);
        });

      naver.maps.Event.addListener(map, 'idle', () => {
        updateMarkers({ isMap: map, isMarkers: markers });
      });

      for (let i = 0; i < markers.length; i += 1) {
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
      }
    }
  }, [myLocation]);

  return {
    myLocation,
    maps,
  };
}

export default useMap;
