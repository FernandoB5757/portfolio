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
                        :items="data"
                        title="Beam me up"
                        description="Show the timeline in style"
                    >
                    </Timeline> 
                    <!-- <Timeline></Timeline>  -->
                </div>
            </div>
        </div>
    </div>

     
</template>

<script setup lang="ts">
import BlurReveal from '../animations/BlurReveal.vue';
// import Timeline from '../animations/TimeLinePrime.vue';
import Timeline from '../animations/TimeLine.vue';
import { useTheme } from '~/composables/useTheme'

const data = [
  {
    id: "version1.0",
    label: "Version 1.0",
  },
  {
    id: "version2.0",
    label: "Version 2.0",
  },

  {
    id: "version3.0",
    label: "Version 3.0",
  },
  {
    id: "version4.0",
    label: "Version 4.0",
  },

  {
    id: "version5.0",
    label: "Version 5.0",
  },
  {
    id: "version6.0",
    label: "Version 6.0",
  },
];

</script>

<style>
/* Para pantallas pequeñas (mobile first) */
@media (max-width: 767px) {
  .timeline-item::before {
    content: '';
    @apply absolute left-[-8px] top-6 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800;
  }
}
</style>