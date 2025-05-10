<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 justify-items-center w-full">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '~/types/project'
import ProjectCard from './ProjectCard.vue';

const props = defineProps<{
  projects: ProjectI18n[]
  itemsPerRow?: number
}>()

</script>