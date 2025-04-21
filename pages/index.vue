<template>
    <div>
        <section id="welcome-home">
            <SectionHome />
        </section>
        
        <section id="about-me" class="bg-surface-100 dark:bg-surface-900">
            <SectionAboutMe />
        </section>
    </div>
</template>
<script setup lang="ts">
import SectionHome from '@/components/home/SectionHome.vue'
import SectionAboutMe from '@/components/home/SectionAboutMe.vue'

</script>