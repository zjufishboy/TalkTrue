import { apiGet } from "./api";

export const searchTeacherInfo = async (key: string) => {
  const data = await apiGet("/teacher", { name: key });
  const result = await data.json();
  return result;
};
