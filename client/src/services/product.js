import api from "./api-helper"

export const createProduct = async (product) => {
  const resp = await api.post('/products', { product })
}

export const getProducts = async () => {
  const resp = await api.get('/products')
  return resp.data
}

export const getProduct = async (id) => {
  const resp = await api.get(`/products/${id}`)
  return resp.data
}

export const getProductsByUser = async (id) => {
  const resp = await api.get(`/products/byuser/${id}`)
  return resp.data
}

export const editProduct = async (product) => {
  const resp = await api.put(`/products/${product.id}`, { product })
} 