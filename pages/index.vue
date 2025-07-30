<template>
    <div>
        <section id="welcome-home">
            <HomeSectionHome />
        </section>
        
        <section id="about-me" class="limit-elements">
            <HomeSectionAboutMe />
        </section>

        <section id="my-portfolio" class="limit-elements">
            <HomeSectionPortfolio />
        </section>

        <section id="my-resume" class="limit-elements">
            <HomeSectionResume />
        </section>

        <section id="contact-with-me" class="limit-elements">
            <HomeSectionContactMe />
        </section>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const img = useImage()

const title = 'JFBG | ' + t('portfolio');
const description = t('seo.description');
// const head = useLocaleHead()

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: img("images/logo.webp")
})

// useHead(() => ({
//   htmlAttrs: {
//     lang: head.value.htmlAttrs?.lang,
//     dir: head.value.htmlAttrs?.dir
//   },
// }))
</script>

<style scoped>

.limit-elements{
    @apply max-w-[1320px] ml-auto mr-auto;
}

</style>