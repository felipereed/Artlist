import api from "./api-helper"

export const createProduct = async (product) => {
  const resp = await api.post('/products', { product })
}

export const getProducts = async () => {
  const resp = await api.get('/products')
  return resp.data
}