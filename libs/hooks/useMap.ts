import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import qs from 'qs';
import client from '../api/client';
import { useMapsList } from '../api/maps';

function useMap() {
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >('');

  async function getMapsList(query: CoordinateType) {
    const data = await useMapsList(query);
    return data;
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      /*
      setMyLocation({
        latitude: position.coord.latitude,
        longitude: position.coord.longitude,
      });
      */
      setMyLocation({
        latitude: 37.5114496,
        longitude: 126.9555199,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.5114496, longitude: 126.9555199 });
    }
  }, []);

  useEffect(() => {
    async function getMapsList(query: CoordinateType) {
      const queryString = qs.stringify(query);
      const response = await client.get<MapType>(`/dorm/list?${queryString}`);
      return response.data;
    }

    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const coords = map.getBounds();
      getMapsList({
        rtlat: coords.maxX(),
        rtlng: coords.maxY(),
        lblat: coords.minX(),
        lalng: coords.minY(),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
