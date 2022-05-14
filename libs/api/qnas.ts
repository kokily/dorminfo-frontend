import qs from 'qs';
import client from './client';

interface ListQnasQuery {}

// 문의사항 리스트
export async function listQnasAPI(query: ListQnasQuery) {
  try {
    const queryString = qs.stringify(query);
    const response = await client.get(`/qnsa?${queryString}`);
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
}

// 문의사항 읽기
export async function readQnaAPI(id: string) {
  try {
    const response = await client.get(`/qnas/${id}`);
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
}

interface WriteQnaPayload {}

// 문의글 게시
export async function writeQnaAPI(payload: WriteQnaPayload) {
  try {
    const response = await client.post('/qnas', payload);
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
}
