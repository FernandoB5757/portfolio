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
        class="min-h-[89vh] flex flex-col md:flex-row items-center container px-2 lg:px-0 mx-auto gap-x-4"
        :height="1200"
        :waveOpacity="0.2"
    >
        <div class="w-full md:w-2/3 xl:w-1/2" id="me-welcome-letters">
            <div class="align-content-center align-items-center p-3">
                <div class="w-full h-full relative mt-5">
                    <div class="relative mt-5">
                        <div class="mb-0">
                            <p class="text-md font-bold uppercase mb-5">
                                {{ $t('homewelcome') }}
                            </p>
                            <h1 class="text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold">
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
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-1/3 xl:w-1/2" id="me-welcome-image">
            <div class="p-3 flex items-center justify-center relative">
                <div class="w-60 h-52 md:w-72 md:h-64 lg:w-96 lg:h-80 absolute z-0 image-shadow">
                    <div class="w-full h-full bg-black/20"></div>
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
                                class: 'w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 '}" 
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
</script>

<style scoped>

.image-shadow {
    bottom: 12px;
}
</style>