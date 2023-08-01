import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/david/Documents/projects/nuxt-dev-tools/nuxt-dev-tools/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}