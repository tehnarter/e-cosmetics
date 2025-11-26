export default defineNuxtConfig({
  compatibilityDate: "2025-11-26",
  typescript: {
    shim: false,
  },
  devtools: { enabled: false },
  css: ["@/assets/styles/main.scss", "swiper/css"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/styles/utils" as*;',
  //       },
  //     },
  //   },
  // },
  modules: [
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-gtag",
    "@nuxt/image",
    // "@vite-pwa/nuxt",
  ],
  // image: {
  //    provider: 'ipx',
  //   quality: 80,
  //   screens: {
  //   xs: 479.9,   // (max-width: 767.9px)
  //   sm: 767.9,   // (max-width: 1023.9px)
  //   md: 1023.9,  // (max-width: 1439.9px)
  //   lg: 1439.9,  // (max-width: 1919.9px)
  //   xl: 1919.9   // Більше  1919.9px
  // }
  // },
  site: {
    // або вручну звідси підтягни
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
    name: process.env.NUXT_SITE_NAME || "Default Site Name",
    trailingSlash: true, // шляхи з / в sitemap
  },

  gtag: {
    // id: "G-DK2KX7Z7S2", // 🔁 Увімкни, коли отримаєш ID від Google Analytics
  },

  app: {
    // layoutTransition: { name: "layout", mode: "out-in" },
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "e-cosmetics",
      htmlAttrs: {
        lang: "uk",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "theme-color",
          content: "#d3e3fd",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        //   { rel: "manifest", href: "/manifest.webmanifest" } // Увімкнення PWA в дев-режимі
      ],
      script: [
        // { src: "https://telegram.org/js/telegram-web-app.js" },
        // Додаткові скрипти, якщо потрібно
      ],
    },
  },
  // i18n: {
  //   lazy: true, // переклади завантажуються динамічно, лише при потребі → економія пам’яті
  //   langDir: "locales", // папка, де лежать файли перекладів для кожної локалі
  //   strategy: "prefix_except_default", // prefix - всі локалі отримують префікс у URL: /ua/, /en/, /pl/, /ru/
  //   defaultLocale: "ua", // мова за замовчуванням → використовується для root та генерації лінків
  //   trailingSlash: true, // додає слеш у кінці URL → /ua/ замість /ua
  //   baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",

  //   locales: [
  //     {
  //       code: "ua",
  //       iso: "uk-UA",
  //       language: "uk",
  //       file: "ua.json",
  //       name: "Українська",
  //       isCatchallLocale: true, //  головна мова, яка отримає hreflang="x-default"
  //     },
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       language: "en",
  //       file: "en.json",
  //       name: "English",
  //     },
  //   ],
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     alwaysRedirect: false, // true завжди примусово редіректити на мову браузера
  //     redirectOn: "root", // тільки редірект з /
  //     fallbackLocale: "ua",
  //   },
  // },
  // pwa: {
  //   registerType: "autoUpdate", //  "autoUpdate" Автооновлення PWA при зміні контенту
  //   //"prompt" (за замовчуванням) Ручне оновлення
  //   manifest: {
  //     name: "Kordon",
  //     short_name: "Kordon",
  //     description: "Черги на кордоні та новини прикордоння України",
  //     start_url: "/",  // або можна ставити "/" + дефолтна мова
  //     scope: "/",          // охоплює всі маршрути
  //     display: "standalone",
  //     theme_color: "#d3e3fd",
  //     background_color: "#d3e3fd",
  //     icons: [
  //       {
  //         src: "icon-192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icon-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //     screenshots: [
  //       {
  //         src: "pwa-app.jpg",
  //         type: "image/jpg",
  //         sizes: "540x720",
  //         form_factor: "narrow",
  //         label: "Application",
  //       },
  //       {
  //         src: "pwa-web_app.jpg",
  //         type: "image/jpg",
  //         sizes: "720x540",
  //         form_factor: "wide",
  //         label: "WEBApplication",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: null,  // Не робимо fallback,щоб уникнути зациклених редіректів через i18n
  //     skipWaiting: true, //  true — новий SW автоматично активується після встановлення
  //     clientsClaim: true, //true — новий SW захоплює всі вкладки одразу
  //     globPatterns: [
  //       "**/*.{js,css,html,png,jpg,svg,ico,json,woff2}", //	Файли, які треба закешувати
  //       "**/_payload.json", //  Потрібно для ssr:true
  //       "_nuxt/builds/**/*.json", // Якщо є
  //     ],
  //     cleanupOutdatedCaches: true, //Видаляє старі кеші, які більше не потрібні
  //     globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"], //	Файли, які не треба кешувати
  //   },
  //   // devOptions: {
  //   //   enabled: true, // Увімкнення SW в дев-режимі
  //   //   type: "module", // Якщо твій SW використовує ES-модулі
  //   // },
  // },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  routeRules: {
    "/.well-known/**": { redirect: "/" }, // або return 404
  },
  runtimeConfig: {
    public: {
      // // автоматично підтягнеться з NUXT_PUBLIC_SITE_URL
      // siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      // apiBase: process.env.NUXT_PUBLIC_API_URL,
      // apiKey: process.env.NUXT_PUBLIC_API_KEY,
    },
    // // підтягнеться з NUXT_SITE_NAME, доступне лише на сервері
    // siteName: process.env.NUXT_SITE_NAME || "Default Site Name",
  },
  nitro: {
    preset: "static", //"node-server" — серверний режим (SSR) | "static"— повністю статичний сайт (SSG)
    prerender: {
      // Вкажи тут усі маршрути, які потрібно обов’язково зберегти як HTML
      routes: [
        // "/", // index.html
        // "/about", // about/index.html
      ],
    },
    // logLevel: "debug",
    // // Це примусово виведе помилки під час SSR
    // errorHandler: "~/server/error-handler",
  },
  // vite: {
  //   server: {
  //     watch: {
  //       usePolling: true, // додаткове слідкування за файлам,для оновлення сторінки
  //     },
  //   },
  // },
  devServer: {
    host: "0.0.0.0", // дозволяє доступ з інших пристроїв у мережі
    port: 3000,
  },
})
