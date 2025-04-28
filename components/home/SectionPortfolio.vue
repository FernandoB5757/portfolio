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
                            Visit my portfolio and keep your feedback
                        </span>
                        <h2 class="text-6xl font-bold leading-tight  mt-4 mb-0">
                            My Portfolio
                        </h2>
                    </BlurReveal>
                </div>

                <div id="my-portfolio-projects" class="w-full relative">
                    <div class="flex">
                        <div>wewqewq</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BlurReveal from '../animations/BlurReveal.vue';
import { useTheme } from '~/composables/useTheme'


</script>