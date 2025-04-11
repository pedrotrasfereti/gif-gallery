import axios from 'axios'

const BASE_URL = 'https://api.giphy.com/v1'
const API_KEY = '8WzBlK6CdxdUia1TA9iZyG3UFNEkI1lp'

export async function getTrendingGifs(offset = 0) {
  const url = `${BASE_URL}/gifs/trending?api_key=${API_KEY}&limit=8&offset=${offset}&rating=g&bundle=messaging_non_clips`
  const res = await axios.get(url)
  return res.data.data
}

export async function getTrendingSearches() {
  const url = `${BASE_URL}/trending/searches?api_key=${API_KEY}`
  const res = await axios.get(url)
  return res.data.data
}

export async function getGifsByIds(ids) {
  const url = `${BASE_URL}/gifs?api_key=${API_KEY}&ids=${ids.join(',')}&rating=g`
  const res = await axios.get(url)
  return res.data.data
}

export async function searchGifs(query = '', offset = 0) {
  const q = encodeURIComponent(query.trim().toLowerCase())
  const url = `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${q}&limit=8&offset=${offset}&rating=g&bundle=messaging_non_clips`
  const res = await axios.get(url)
  return res.data.data
}

export async function getCategories() {
  const url = `${BASE_URL}/gifs/categories?api_key=${API_KEY}`
  const res = await axios.get(url)
  return res.data.data
}
