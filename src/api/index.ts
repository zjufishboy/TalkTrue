export * from "./search";
import { apiGet } from "./api";
export const reqTeacherById = async(id:string) => {
  const data = await apiGet(`/teacher/${id}`,{});
  const result = await data.json();
  return result;
}