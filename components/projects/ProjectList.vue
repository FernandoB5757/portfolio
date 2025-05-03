<template>
  <div :class="gridClass">
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

const gridClass = computed(() => {
  const cols = props.itemsPerRow || 3
  return `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-6`
})
</script>