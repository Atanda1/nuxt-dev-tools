import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/david/Documents/projects/nuxt-dev-tools/nuxt-dev-tools/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}