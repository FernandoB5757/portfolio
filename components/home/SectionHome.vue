<template>
   
    <WavyBackground 
        :colors="[
            '#bfcdfe',
            '#93abfd',
            '#6083fa',
            '#3b66f6',
            '#2552eb',
            '#1d48d8'
        ]"        
        class="min-h-[89vh] flex flex-col-reverse md:flex-row items-center container px-2 lg:px-0 mx-auto gap-x-4"
        :height="1200"
        :waveOpacity="0.2"
    >
        <div class="w-full md:w-2/3 xl:w-1/2 p-3" id="me-welcome-letters">
            <div class="align-content-center align-items-center">
                <div class="w-full h-full relative mt-5">
                    <div class="relative mt-5">
                        <div class="mb-6">
                            <p class="text-md font-semibold uppercase mb-5 font-serif">
                                {{ $t('homewelcome') }}
                            </p>
                            <h1 class="text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold font-serif">
                                {{ $t('hi_welcome') }} <span class="text-primary">Fernando Barajas</span>
                                <br>
                                <span> {{ $t('a_welcome') }} </span>
                                <FlipWords
                                    :words="[
                                        $t('Software Engineer'),
                                        $t('PHP Developer'),
                                        $t('Web Developer'),
                                        $t('Full Stack Developer')
                                    ]"
                                    :duration="3000"
                                    class="!text-primary w-full"
                                />
                            </h1>
                        </div>
                        <div>
                            <p class="text-lg pr-1 opacity-90">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section class="pt-14 lg:pt-24 xl:pt-32 w-full relative">
                <div class="flex flex-row items-center">
                    <div class="w-1/2">
                        <span class="text-sm tracking-wide uppercase">
                            Find Witth me 
                        </span>
                        <div class="flex flex-row gap-3 uppercase">
                            <CardSpotlight
                                v-for="(socialLink, key) in socialLinks"
                                :key="key"
                                class="cursor-pointer flex-col items-center justify-center whitespace-nowrap shadow-2xl w-14 h-14 "
                                :gradient-color="isDark ? '#363636' : '#C9C9C9'"
                                slot-class=""
                                :gradient-size="200"
                                :gradient-opacity="0.8"
                            >
                                <a :href="socialLink.link"
                                    target="_blank" 
                                    rel="noreferrer noopener" 
                                    :aria-label="socialLink.ariaLabel"
                                    class="flex items-center justify-center"
                                >
                                    <Icon :name="socialLink.icon" 
                                        class="dark:text-surface-400 text-surface-500 hover:text-primary text-4xl" 
                                    />
                                </a>
                            </CardSpotlight>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <span class="text-sm tracking-wide uppercase">
                            Best Skills on
                        </span>
                        <ul class="flex flex-row gap-3">
                            <CardSpotlight
                                v-for="(skills, key) in bestSkills"
                                :key="key"
                                class="cursor-pointer flex-col items-center justify-center whitespace-nowrap shadow-2xl w-14 h-14 "
                                :gradient-color="isDark ? '#363636' : '#C9C9C9'"
                                slot-class="flex items-center justify-center"
                                :gradient-size="200"
                                :gradient-opacity="0.8"
                            >
                                <Icon :name="skills.icon" 
                                    class="dark:text-surface-400 text-surface-500 hover:text-primary text-4xl" 
                                />
                            </CardSpotlight>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <div class="w-full md:w-1/3 xl:w-1/2" id="me-welcome-image">
            <div class="p-3 flex items-center justify-center relative">
                <div class="w-60 h-52 md:w-72 md:h-64 lg:w-96 lg:h-80 absolute z-0 image-shadow">
                    <div class="w-full h-full bg-white/20 dark:bg-black/20
                     rounded
                    shadow-2xl dark:shadow-primary-50/50 shadow-primary-500/50 "></div>
                </div>
                <Image src="/images/me-xl.png" preview 
                    :pt:preview-mask:class="'w-full bg-transparent'"
                >
                    <template #image>
                        <NuxtPicture src="/images/me-xl.png" 
                            :img-attrs="{
                                alt: 'Fernando Barajas', 
                                width: 1024, 
                                height: 1024, 
                                class: 'rounded w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 '}" 
                        />
                    </template>
                    <template #preview="slotProps">
                        <NuxtPicture src="/images/me-md.png" 
                            :img-attrs="{
                                alt: 'Fernando Barajas', 
                                style: slotProps.style, 
                                width: 512, 
                                height: 512, 
                                loading: 'lazy'}" 
                        />
                    </template>
                </Image>
            </div>
        </div>
    </WavyBackground>    
</template>

<script setup lang="ts">    
import FlipWords from '../animations/FlipWords.vue';
import WavyBackground from '../animations/WavyBackground.vue';
import CardSpotlight from '../animations/CardSpotlight.vue';
import { useTheme } from '~/composables/useTheme'
import { socialLinks,bestSkills } from "@/stores/homeStore";

const { isDark } = useTheme();

</script>

<style scoped>
.image-shadow {
    bottom: 12px;
}
</style>