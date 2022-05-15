interface UserType {
  id: string;
  username: string;
  password: string;
}

interface MapType {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  marker?: naver.maps.Marker;
}

interface CoordinateType {
  rtlat: number;
  rtlng: number;
  lblat: number;
  lblng: number;
  search: string | null;
}
