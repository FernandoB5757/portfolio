<template>
    <div>
        <section id="welcome-home">
            <SectionHome />
        </section>
        
        <section id="about-me" class="limit-elements">
            <SectionAboutMe hydrate-on-visible />
        </section>

        <section id="my-portfolio" class="limit-elements">
            <SectionPortfolio hydrate-on-visible />
        </section>

        <section id="my-resume" class="limit-elements">
            <SectionResume hydrate-on-visible />
        </section>

        <section id="contact-with-me" class="limit-elements">
            <SectionContactMe hydrate-on-visible />
        </section>
    </div>
</template>
<script setup lang="ts">
import SectionHome from '@/components/home/SectionHome.vue'
import SectionAboutMe from '@/components/home/SectionAboutMe.vue'
import SectionPortfolio from '@/components/home/SectionPortfolio.vue'
import SectionResume from '@/components/home/SectionResume.vue'
import SectionContactMe from '@/components/home/SectionContactMe.vue'

const { t } = useI18n()
const img = useImage()

const title = 'JFBG | ' + t('portfolio');
const description = t('seo.description');
const head = useLocaleHead()

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: img("images/logo.webp")
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang,
    dir: head.value.htmlAttrs?.dir
  },
}))
</script>

<style scoped>

.limit-elements{
    @apply max-w-[1320px] ml-auto mr-auto;
}

</style>