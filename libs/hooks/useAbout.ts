import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

function useAbout() {
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >('');
  const [address, setAddress] = useState('');
  const mapRef = useRef<HTMLElement | null | any>(null);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    [address]
  );

  const onSubmit = useCallback((e: MouseEvent) => {
    // @ts-ignore
    naver.maps.Service.geocode({ address: address }, (status, response) => {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something Error');
      }

      const result = response.result;
      console.log(result.items[0].point.x);
      setMyLocation({
        latitude: parseFloat(result.items[0].point.x),
        longitude: parseFloat(result.items[0].point.y),
      });
    });
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);

  return {
    address,
    myLocation,
    onChange,
    onSubmit,
  };
}

export default useAbout;
