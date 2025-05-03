<template>
  <PrimeDialog
    v-model:visible="localVisible"
    modal
    :header="project.title"
    :style="{ width: '50vw' }"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
  >
    <div class="project-details">
      <NuxtImg
        :src="project.image.src"
        :alt="project.image.alt"
        class="details-image"
      />
      
      <div class="details-meta">
        <div class="flex items-center gap-2">
          <i class="pi pi-calendar"></i>
          <span>
            {{ formatDate(project.date.start) }} - 
            {{ project.date.isCurrent ? t('dates.present') : project.date.end ? formatDate(project.date.end) : t('dates.present') }}
          </span>
        </div>
      </div>
      
      <div class="details-section">
        <h4 class="section-title">{{ t('description') }}</h4>
        <p class="section-content">
          {{ project.description }}
        </p>
      </div>
      
      <div class="details-section">
        <h4 class="section-title">{{ t('contribution') }}</h4>
        <p class="section-content">
            {{ project.contribution }}
        </p>
      </div>
      
      <div class="details-section">
        <h4 class="section-title">{{ t('technologies') }}</h4>
        <div class="flex flex-wrap gap-2">
            <Badge size="xlarge" severity="primary"
                v-for="techId in project.technologies"
                :key="techId"
                :value="techId"
            />
        </div>
      </div>
      
      <div class="details-actions">
        <PrimeButton
          :label="t('actions.visitProject')"
          icon="pi pi-external-link"
          @click="navigateTo(project.url, { external: true })"
        />
      </div>
    </div>
  </PrimeDialog>
</template>

<script setup lang="ts">
import type { ProjectI18n } from '~/types/project'
// import { useTechnologies } from '@/composables/useTechnologies'

const props = defineProps<{
  project: ProjectI18n
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const { t } = useI18n()
// const { getTechnologyById } = useTechnologies()

const localVisible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long'
  })
}
</script>

<style scoped>
.project-details {
  @apply space-y-6;
}

.details-image {
  @apply w-full h-64 object-cover rounded-lg;
}

.details-meta {
  @apply text-gray-600 dark:text-gray-300;
}

.details-section {
  @apply space-y-2;
}

.section-title {
  @apply font-semibold text-lg;
}

.section-content {
  @apply text-gray-700 dark:text-gray-300;
}

.details-actions {
  @apply flex justify-end pt-4;
}
</style>
