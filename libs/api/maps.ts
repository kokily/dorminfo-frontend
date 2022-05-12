import qs from 'qs';
import { useQuery } from 'react-query';
import client from './client';

// 범위 리스트 호출
async function listMapsAPI(query: CoordinateType) {
  const queryString = qs.stringify(query);
  const response = await client.get<MapType[]>(`/dorm/list?${queryString}`);
  return response.data;
}

export function useMapsList(query: CoordinateType) {
  return useQuery(['maps', query], () => listMapsAPI(query), {
    enabled: true,
  });
}
