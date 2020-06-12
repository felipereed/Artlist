import api from "./api-helper"

export const getCategories = async () => {
  const resp = await api.get('/categories')
  return resp.data 
}
