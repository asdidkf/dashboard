import api from ".";
/* import { AxiosError } from "axios"; */
import type { Category } from "my-types";


export const getAllCategories = async (): Promise<Category[]> => {
  const res = await api.get<Category[]>("/category");
  console.log(res.data); 
  return res.data;
};