<template>
    <div>
        <section id="welcome-home">
            <SectionHome />
        </section>
        
        <section id="about-me" class="limit-elements">
            <SectionAboutMe />
        </section>

        <section id="my-portfolio" class="limit-elements">
            <SectionPortfolio />
        </section>
    </div>
</template>
<script setup lang="ts">
import SectionHome from '@/components/home/SectionHome.vue'
import SectionAboutMe from '@/components/home/SectionAboutMe.vue'
import SectionPortfolio from '@/components/home/SectionPortfolio.vue'

</script>

<style scoped>

.limit-elements{
    @apply max-w-[1320px] ml-auto mr-auto;
}

</style>