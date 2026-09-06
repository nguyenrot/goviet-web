<script setup lang="ts">
import { SITE } from '~/lib/site'

const { t, locale } = useI18n()
const { data: release } = useRelease()

const jsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GõViệt',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS 14+',
    url: SITE,
    downloadUrl: release.value?.downloadUrl || 'https://github.com/nguyenrot/goviet/releases/latest',
    softwareVersion: release.value?.version || undefined,
    license: 'https://github.com/nguyenrot/goviet/blob/main/LICENSE',
    author: {
      '@type': 'Person',
      name: 'Phạm Kỷ Nguyên',
      url: 'https://kynguyen.cc',
    },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: t('meta.description'),
  }),
)

useHead(() => ({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:locale', content: locale.value === 'en' ? 'en_US' : 'vi_VN' },
    {
      property: 'og:locale:alternate',
      content: locale.value === 'en' ? 'vi_VN' : 'en_US',
    },
  ],
  script: [{ type: 'application/ld+json', innerHTML: jsonLd.value }],
}))
</script>

<template>
  <div>
    <Hero />
    <FeatureTelex />
    <FeatureEnglish />
    <FeatureApps />
    <FeatureNative />
    <FeatureMore />
    <Engineering />
    <InstallGuide />
    <TrustLimits />
    <FinalCta />
  </div>
</template>
