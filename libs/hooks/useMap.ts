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

  function getClickHandler(marker: any) {
    naver.maps.Event.addListener(marker, 'click', (e: any) => {
      const mapLatLng = new naver.maps.LatLng(
        markerRef1.current.map.center.x,
        markerRef1.current.map.center.y
      );
      mapRef.current.panTo(mapLatLng, e?.coord);
    });
  }

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

      let infoWindowElement = '<div>Test</div>';

      let infoWindow = new naver.maps.InfoWindow({
        content: infoWindowElement,
        borderWidth: 0,
        disableAnchor: true,
        backgroundColor: 'transparent',
        pixelOffset: new naver.maps.Point(0, -28),
      });

      // Marker 찍기
      markerRef1.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.533667, 126.9775863),
        map: mapRef.current,
        icon: {
          content: '<div>test</div>',
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });

      markerRef2.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5373958, 126.9785121),
        map: mapRef.current,
      });
      markerRef3.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5344605, 126.9735552),
        map: mapRef.current,
      });

      // console.log(mapRef.current.getBounds());
      // markerRef1.current.map.center.x,
      // markerRef1.current.map.center.y

      naver.maps.Event.addListener(mapRef.current, 'click', (e: any) => {
        let latlng = e.latlng;
        console.log(latlng);

        infoWindow.open(mapRef.current, latlng);
      });
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
