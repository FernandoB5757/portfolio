<template>
    <div class="bg-surface-100 dark:bg-surface-900">
        <section id="welcome-home">
            <SectionHome />
        </section>
        
        <section id="about-me">
            <SectionAboutMe />
        </section>

        <section id="my-portfolio">
            <SectionPortfolio />
        </section>
    </div>
</template>
<script setup lang="ts">
import SectionHome from '@/components/home/SectionHome.vue'
import SectionAboutMe from '@/components/home/SectionAboutMe.vue'
import SectionPortfolio from '@/components/home/SectionPortfolio.vue'

</script>