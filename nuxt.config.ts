import tailwindcss from '@tailwindcss/vite'

const themePreboot = `
(function(){try{
  var m=document.cookie.match(/(?:^|; )kn:theme=([^;]+)/);
  var t=m?decodeURIComponent(m[1]):'light';
  var dark = t==='dark' || (t==='system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}catch(e){}})();
`

export default defineNuxtConfig({
  compatibilityDate: '2026-09-06',

  ssr: true,

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://goviet.kynguyen.cc',
    name: 'GõViệt',
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'vi',
    baseUrl: 'https://goviet.kynguyen.cc',
    locales: [
      { code: 'vi', name: 'Tiếng Việt', file: 'vi.json', language: 'vi-VN' },
      { code: 'en', name: 'English', file: 'en.json', language: 'en-US' },
    ],
    detectBrowserLanguage: false,
  },

  sitemap: {
    excludeAppSources: true,
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    disallow: ['/api/'],
  },

  devtools: { enabled: false },

  css: [
    '@fontsource/be-vietnam-pro/vietnamese-400.css',
    '@fontsource/be-vietnam-pro/vietnamese-500.css',
    '@fontsource/be-vietnam-pro/vietnamese-600.css',
    '@fontsource/be-vietnam-pro/vietnamese-700.css',
    '@fontsource/be-vietnam-pro/vietnamese-400-italic.css',
    '@fontsource/be-vietnam-pro/400.css',
    '@fontsource/be-vietnam-pro/500.css',
    '@fontsource/be-vietnam-pro/600.css',
    '@fontsource/be-vietnam-pro/700.css',
    '@fontsource/ibm-plex-mono/400.css',
    '@fontsource/ibm-plex-mono/500.css',
    '@fontsource/ibm-plex-mono/vietnamese-400.css',
    '@fontsource/ibm-plex-mono/vietnamese-500.css',
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/vi/**': { redirect: { to: '/**', statusCode: 301 } },
    },
  },

  app: {
    head: {
      title: 'GõViệt — Bộ gõ tiếng Việt cho macOS',
      htmlAttrs: { lang: 'vi' },
      script: [{ innerHTML: themePreboot, tagPosition: 'head' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Bộ gõ tiếng Việt cho macOS theo cách Unikey: Telex và VNI, chạy trong mọi ứng dụng, chuyển Anh/Việt bằng phím tắt. Mã nguồn mở.',
        },
        { name: 'theme-color', content: '#F3F4F6' },
        { name: 'color-scheme', content: 'light dark' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'GõViệt' },
        { property: 'og:title', content: 'GõViệt — Bộ gõ tiếng Việt cho macOS' },
        {
          property: 'og:description',
          content:
            'Gõ tiếng Việt trên macOS, theo cách bạn đã quen. Telex, VNI, mọi ứng dụng. Mã nguồn mở.',
        },
        { property: 'og:url', content: 'https://goviet.kynguyen.cc/' },
        { property: 'og:image', content: 'https://goviet.kynguyen.cc/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'vi_VN' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GõViệt — Bộ gõ tiếng Việt cho macOS' },
        {
          name: 'twitter:description',
          content:
            'Gõ tiếng Việt trên macOS, theo cách bạn đã quen. Telex, VNI, mọi ứng dụng. Mã nguồn mở.',
        },
        { name: 'twitter:image', content: 'https://goviet.kynguyen.cc/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://goviet.kynguyen.cc/' },
      ],
    },
  },

  typescript: {
    strict: true,
  },
})
