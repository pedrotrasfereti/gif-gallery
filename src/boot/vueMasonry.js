import { defineBoot } from '#q-app/wrappers'
import MasonryWall from '@yeger/vue-masonry-wall'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async ({ app }) => {
  app.use(MasonryWall)
})
