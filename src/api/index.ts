export * from "./search";
import { apiGet } from "./api";
export const reqTeacherById = async(id:string) => {
  const data = await apiGet(`/teacher/${id}`,{});
 // console.log(data)
  const result = await data.json();
  return result;
}

export const reqCoureseById = async(id:string) => {
  const data = await apiGet(`/abstract_course/${id}`,{});
 // console.log(data)
  const result = await data.json();
  return result;
}