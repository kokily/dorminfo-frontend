import qs from 'qs';
import client from './client';

// 범위 리스트 호출
export async function listMapsAPI(query: CoordinateType) {
  try {
    const queryString = qs.stringify(query);
    const response = await client.get<MapType[]>(`/dorm/list?${queryString}`);
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
}

// 단일 마커 호출
export async function readMapAPI(id: number) {
  try {
    const response = await client.get<MapType>(`/dorm/${id}`);
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
}
