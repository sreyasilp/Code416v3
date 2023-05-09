import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4016" });

export const getProducts = (page) => API.get(`product/?page=2`);
export const updateProduct = (id, updatedProduct) =>
  API.patch(`/product/${id}`, updatedProduct);
export const signUp = (formData) => API.post("/user/signup/userType", formData);
export const signIn = (formData) => API.post("/user/signin", formData);
export const deleteProduct = (id) => API.delete(`/posts/${id}`);
export const getProductsBySearch = (searchQuery) =>
  API.get(
    `/product/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
