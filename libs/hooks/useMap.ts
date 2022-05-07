import { useEffect, useRef, useState } from 'react';

function useMap() {
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >('');
  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef1 = useRef<any | null>(null);
  const markerRef2 = useRef<any | null>(null);
  const markerRef3 = useRef<any | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      // position.coord.latitude, longitude
      setMyLocation({
        latitude: 37.533667,
        longitude: 126.9775863,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.533667, longitude: 126.9775863 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      // Marker 찍기
      markerRef1.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.533667, 126.9775863),
        map: mapRef.current,
      });

      naver.maps.Event.addListener(markerRef1, 'click', (e: any) => {
        console.log('click');
        const mapLatLng = new naver.maps.LatLng(37.533667, 126.9775863);
        mapRef.current.PanTo(mapLatLng, e?.coord);
      });

      markerRef2.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5373958, 126.9785121),
        map: mapRef.current,
      });
      markerRef3.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5344605, 126.9735552),
        map: mapRef.current,
      });
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
