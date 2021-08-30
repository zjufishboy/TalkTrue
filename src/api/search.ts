import { apiGet } from "./api";

export const searchTeacherInfo = async (key: string) => {
  const data = await apiGet("/teacher", { name: key });
  console.log({ data });
};
