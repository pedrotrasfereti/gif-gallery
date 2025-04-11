import { defineStore, acceptHMRUpdate } from 'pinia'
import {
  getCategories,
  getGifsByIds,
  getTrendingGifs,
  getTrendingSearches,
  searchGifs,
} from '../api/giphy'
import { LocalStorage } from 'quasar'

export const useGifStore = defineStore('gif', {
  state: () => ({
    search: '',
    categories: [],
    selectedCategory: null,
    gifs: [],
    favorites: LocalStorage.getItem('favorites') || [],
    trendingSearches: [],
    loading: true,
    error: null,
  }),

  actions: {
    clearGifs() {
      this.gifs = []
    },

    clearSelectedCategory() {
      this.selectedCategory = null
    },

    setSelectedCategory(category) {
      this.selectedCategory = category
    },

    async getCategories() {
      this.error = null
      this.loading = true

      try {
        const data = await getCategories()
        this.categories = data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async getTrendingGifs() {
      this.error = null
      this.loading = true

      try {
        const data = await getTrendingGifs()
        this.gifs = data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async getMoreGifs(done) {
      const offset = this.gifs.length
      if (offset >= 100) return

      this.error = null

      try {
        const data = await getTrendingGifs(offset)
        this.gifs.push(...data)
      } catch (err) {
        this.error = err
      } finally {
        done()
      }
    },

    async getTrendingSearches() {
      const data = await getTrendingSearches()
      this.trendingSearches = data
    },

    async searchGifs(query) {
      this.error = null
      this.loading = true

      try {
        const data = await searchGifs(query)
        this.gifs = data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async getFavorites() {
      this.error = null
      this.loading = true

      try {
        const favorites = LocalStorage.getItem('favorites')

        if (favorites) {
          this.favorites = favorites
          const data = await getGifsByIds(favorites)
          this.gifs = data
        }
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    toggleFavorite(id) {
      const index = this.favorites.indexOf(id)
      if (index === -1) this.favorites.push(id)
      else this.favorites.splice(index, 1)
      LocalStorage.set('favorites', this.favorites)
    },
  },
})

export default useGifStore

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGifStore, import.meta.hot))
}
