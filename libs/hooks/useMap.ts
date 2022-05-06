import { useEffect, useRef, useState } from 'react';

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude
        ),
        zoomControl: true,
      });
    }
  }, [mapRef, myLocation]);

  return {
    mapRef,
    myLocation,
  };
}

export default useMap;
