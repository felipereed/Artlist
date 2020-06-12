import api from './api-helper'

export const createUser = async (user) => {
  const resp = await api.post('/users', { user })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const validateUser = async (user) => {
  const resp = await api.post('/auth/login', { user })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}