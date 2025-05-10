<template>
  <article class="project-card">
    <div class="relative">
        <NuxtImg
          :src="project.image.src"
          :alt="project.image.alt"
          :width="project.image.width || 400"
          :height="project.image.height || 300"
          class="project-image"
          loading="lazy"
          placeholder
          @click="isOpen = true"
        />
        <div class="project-content">
          <h5 class="project-title" @click="isOpen = true">
            {{ project.title }}
          </h5>
          <p>
            {{ project.description }}
          </p>
      </div>
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
  @apply p-7 max-w-sm bg-white border border-surface-200 rounded-lg shadow-sm dark:bg-surface-800 dark:border-surface-700 h-96;
}

.project-image {
  @apply w-full h-48 object-cover rounded-lg cursor-pointer;
}

.project-content {
  @apply mt-5 cursor-pointer;
}

.project-title {
  @apply mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white;
}
</style>