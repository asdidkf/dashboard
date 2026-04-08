import api from ".";
import { AxiosError } from "axios";
import type { NewProductInput, Product } from "my-types";


export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/product");
  console.log(res.data); 
  return res.data;
};

export const createProduct = async (data: NewProductInput): Promise<Product> => {
  try {
    const res = await api.post<ApiResponse<Product>>("/product", data);

    return res.data.payload;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error creating product:", err.message);

    throw err;
  }
};

export const updateProduct = async (id: number, data: NewProductInput): Promise<Product> => {
  try {
    const res = await api.patch<ApiResponse<Product>>(`/product/${id}`, data);

    return res.data.payload;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error updating product:", err.message);

    throw err;
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await api.delete(`/product/${id}`);
  } catch (error) {
    const err = error as AxiosError;
    console.error("Error deleting product:", err.message);
    throw err;
  }
};
