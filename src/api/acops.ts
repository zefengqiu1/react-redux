import { BackendPerson } from '../constant/Person';
import { axios } from './axios';

interface GetPeopleResponse {
  data: BackendPerson[];
};
const serviceUrl = 'http://192.168.9.129:8080'; //  point to the host you deploy
// interface SavePersonResponse {
//   id: string;
// }
// 为什么用axios
export async function getPeople(): Promise<GetPeopleResponse> {
  const response = await axios.get<GetPeopleResponse>(serviceUrl +'/api/people');
  return response.data;
}

// 如果有return就必须return，不然报错 
// 直接return id
export async function putPerson(person: BackendPerson): Promise<string> {
  const response = await axios.put<string>(serviceUrl + '/api/person', person);
  return response.data; // person id
}

//
export async function getPerson(id: string): Promise<BackendPerson> {
  const response = await axios.get<BackendPerson>(serviceUrl + `/api/person/${id}`);
  return response.data; // person person
}

