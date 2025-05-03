<template>
  <article class="project-card">
    <NuxtImg
      :src="project.image.src"
      :alt="project.image.alt"
      :width="project.image.width || 400"
      :height="project.image.height || 300"
      class="project-image"
      loading="lazy"
      placeholder
    />
    
    <div class="project-content">
      <h3 class="project-title">
        {{ project.title }}
      </h3>
      
      <PrimeButton
        :label="t('actions.viewDetails')"
        icon="pi pi-eye"
        @click="isOpen = true"
      />
    </div>

    <ProjectDetails 
      :project="project"
      v-model:visible="isOpen"
    />
  </article>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '~/types/project'
import ProjectDetails from './ProjectDetails.vue';

const props = defineProps<{
  project: ProjectI18n
}>()

const { t } = useI18n()
const isOpen = ref(false)
</script>

<style scoped>
.project-card {
  @apply relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl;
}

.project-image {
  @apply w-full h-48 object-cover;
}

.project-content {
  @apply p-4 bg-white dark:bg-gray-800;
}

.project-title {
  @apply text-xl font-semibold mb-3 line-clamp-2;
}
</style>