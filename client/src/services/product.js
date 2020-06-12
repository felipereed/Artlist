import api from "./api-helper"

export const createProduct = async (product) => {
  const resp = await api.post('/products', { product })
}