// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    (inlineOptions, nuxt) => {
      nuxt.hook("devtools:customTabs", (tabs) => {
        tabs.push({
          name: "Custom page",
          title: "Custom page",
          icon: "carbon:apps",
          view: {
            type: "iframe",
            src: "../../../",
          },
        });
      });
    },
  ],
  devtools: {
    enabled: true,
    timeline: {
      /**
       * Enable timeline tab
       *
       * @default false
       */
      enabled: true,
      /**
       * Track on function calls
       */
    },
  },
});
