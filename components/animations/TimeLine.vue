<template>
  <div
    ref="timelineContainerRef"
    class="w-full font-sans md:px-10"
  >
    <!-- <div class="mx-auto max-w-7xl px-4 py-20 lg:px-10 md:px-8">
      <h2 class="mb-4 max-w-4xl text-lg text-black md:text-4xl dark:text-white">
        {{ title }}
      </h2>
      <p class="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
        {{ description }}
      </p>
    </div> -->

    <div
      ref="timelineRef"
      class="relative z-0 mx-auto max-w-7xl py-20"
    >
      <div class="customized-timeline !bg-transparent">
         <div 
              v-for="(item, index) in items"
              :key="item.id"
          >
            <div class="relative mb-12 flex w-full mx-5 md:mx-0" >
                <div :class="[
                      'w-full md:w-1/2',
                        index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left',
                        index % 2 === 0 ? 'order-1' : 'order-2' 
                    ]"
                >
                    <div class="relative rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-900">
                    <h3 class="mb-4 text-2xl font-bold text-neutral-500">
                        {{ `Section ${index + 1}` }}
                    </h3>
                    <p class="text-sm text-neutral-800 dark:text-neutral-200">
                        Inspira UI gives you the freedom to design awesome website, in less time.
                    </p>
                    </div>
                </div>
                <div 
                    class="absolute left-1/2 top-6 -translate-x-1/2 transform md:relative md:left-0 md:top-0 md:w-1/2 md:translate-x-0"
                    :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
                >
                </div>
                <div class="absolute w-full top-1/2 flex justify-start md:justify-center  ml-[-26px] md:ml-0">
                  <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
            </div>
          </div>
      </div>

      <div :style="{
              height: height + 'px',
            }" 
        class="absolute w-full top-0 flex justify-start md:justify-center"
      >
          <div class="x-0 relative w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
          >
            <Motion
              as="div"
              :style="{
                height: heightTransform,
                opacity: opacityTransform,
              }"
              class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
            >
            </Motion>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from "motion-v";
import type { HTMLAttributes } from "vue";

interface Props {
  containerClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
  items?: {
    id: string;
    label: string;
  }[];
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});

const timelineContainerRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const height = ref(0);

onMounted(async () => {
  await nextTick();
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect();
    height.value = rect.height;
  }
});

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 10%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
let heightTransform = useTransform(scrollYProgress, [0, 1], [0, height.value]);

watch(height, (newHeight) => {
  heightTransform = useTransform(scrollYProgress, [0, 1], [0, newHeight + 200]);
});
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 960px) {
      ::v-deep(.customized-timeline) {
          .p-timeline-event:nth-child(even) {
              flex-direction: row;

              .p-timeline-event-content {
                  text-align: left;
              }
          }

          .p-timeline-event-opposite {
              flex: 0;
          }
      }
  }
</style>