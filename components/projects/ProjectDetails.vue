<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    pt:root:class="p-11 overflow-hidden"
    :style="{ width: '1230px' }"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :draggable="false"
  >
  <template #container="{ closeCallback }">
      <div>
          <Button  
            iconPos="right" 
            @click="closeCallback" 
            class="!absolute top-2 right-2 !rounded-full"
            rounded 
            severity="secondary" 
            variant="outlined" 
            aria-label="close modal"
          >
              <Icon name="heroicons:x-mark" class="text-lg text-primary"/>
          </Button>
      </div>
      <div class="modal-body relative flex-1 p-4">
        <div class="flex gap-8">

          <div class="w-full md:w-1/2">
            <Image
              :src="project.image.src"
              :alt="project.image.alt"
              class="details-image"
              preview
            />
          </div>

          <div class="w-full md:w-1/2">
            <h3 class="mb-5 text-4xl font-bold leading-snug">
              {{ project.title }}
            </h3>

            <p class="text-lg leading-8 font-normal">
              {{ project.description }}
            </p>

            <div class="info-list">
              <ul>
                <li>
                  <strong>
                    {{ t('dates.start') }} :
                  </strong>
                  <span>
                    {{ formatDate(project.date.start) }} 
                  </span>
                </li>

                <li>
                  <strong>
                    {{ t('dates.end') }} :
                  </strong>
                  <span>
                    {{ project.date.isCurrent ? t('dates.present') : (project.date.end ? formatDate(project.date.end) : '' ) }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="details-section">
              <div class="flex flex-wrap gap-2">
                  <Tag v-for="techId in project.technologies" 
                      :key="techId"
                      :value="techId"
                      rounded
                      class="bg-primary-500/10 text-primary-600 dar:bg-primary-800/10 dark:text-primary-800"
                  ></Tag>

              </div>
            </div>

            <div class="flex mt-5 justify-end">
              <Button
                v-if="project.url"
                :href="project.url" 
                target="_blank" 
                rel="noopener"
                severity="primary" 
                variant="text"
                aria-label="view project"
                raised
              >
                {{ t('view project') }} <Icon name="heroicons:arrow-right-circle" />
              </Button>

              <Button
                v-else
                rel="noopener"
                severity="primary" 
                variant="text"
                aria-label="view project"
                raised
              >
                Proximamente
              </Button>
              
            </div>
            
          </div>

        </div>

        <hr class="mb-8 mt-3 border-primary-100 dark:border-black">

        <div class="details-section h-80">
          <p class="section-content">
            {{ project.long_description }}
          </p>
          <p class="section-content mt-5">
              {{ project.contribution }}
          </p>
        </div>     

      </div>

  </template>
  </Dialog>
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

.info-list {
  @apply mt-6;
}

.info-list ul {
  @apply flex list-none;
}

.info-list li{
    @apply flex basis-1/2;
}

.info-list strong{
  @apply font-semibold pr-2 mr-2;
}

.project-details {
  @apply space-y-6;
}

.details-image {
  @apply w-full h-72 object-cover rounded-lg;
}

.details-meta {
  @apply text-gray-600 dark:text-gray-300;
}

.details-section {
  @apply mt-8 overflow-y-auto;
}

.section-title {
  @apply font-semibold text-lg;
}

.section-content {
  @apply text-gray-700 dark:text-gray-300 whitespace-pre-line;
}

</style>
