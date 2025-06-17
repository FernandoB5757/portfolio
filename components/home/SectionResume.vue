<template>
    <div class="py-16 relative ml-auto mr-auto flex">
        <div class="flex relative w-full p-3 content-center flex-wrap ">
            <div class="relative w-full">
                <div class="text-center" id="my-portfolio-header">
                    <BlurReveal
                        :delay="0.2"
                        :duration="0.75"
                        class="p-8"
                    >
                        <span class="text-primary block uppercase text-sm font-medium tracking-widest leading-4">
                            7+ Years of Experience
                        </span>
                        <h2 class="text-6xl font-bold leading-tight  mt-4 mb-0">
                            My Resume
                        </h2>
                    </BlurReveal>
                </div>
                
                <div class="h-fit w-full !relative">
                    <Timeline
                        :items="experiences"
                        :height="2500"
                    >
                    </Timeline> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BlurReveal from '../animations/BlurReveal.vue';
import Timeline from '../animations/TimeLine.vue';
import { useExperiences } from '~/composables/useExperiences'
import { useTheme } from '~/composables/useTheme'

const { experiences } = useExperiences();

</script>

<style scoped>
/* Para pantallas pequeñas (mobile first) */
@media (max-width: 767px) {
  .timeline-item::before {
    content: '';
    @apply absolute left-[-8px] top-6 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800;
  }
}
</style>