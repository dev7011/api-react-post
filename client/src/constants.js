export const API_BASE_URL =
  process.env.NODE_ENV === 'test'
    ? "http://mock-api.com"
    : import.meta.env.VITE_API_BASE || "http://localhost:3000"
