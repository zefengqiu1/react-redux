import { BackendPerson, basicInfo, schoolInfo } from '../constant/Person';
import { axios } from './axios';

interface GetPeopleResponse {
  data: BackendPerson[];
};

// interface SavePersonResponse {
//   id: string;
// }
// 为什么用axios
export async function getPeople(): Promise<GetPeopleResponse> {
  const response = await axios.get<GetPeopleResponse>('http://localhost:8080/api/people');
  return response.data;
}

// 如果有return就必须return，不然报错 
// 直接return id
export async function putPerson(person: BackendPerson): Promise<string> {
  const response = await axios.put<string>('http://localhost:8080/api/person', person);
  return response.data; // person id
}

//
export async function getPerson(id: string): Promise<BackendPerson> {
  const response = await axios.get<BackendPerson>(`http://localhost:8080/api/person:${id}`);
  return response.data; // person person
}

