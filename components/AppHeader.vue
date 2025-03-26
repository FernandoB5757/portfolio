<template>
    <div>

        <Drawer v-model:visible="showMenu">
            <template #header>
                <div class="flex items-center gap-2">
                    <Avatar image="/images/me-xl.png" 
                        class="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
                        size="xlarge" 
                        shape="circle" 
                    />
                    <p class="text-xl font-bold">
                        Fernando Barajas
                    </p>
                </div>
            </template>
            <p class="description">
                Inbio is a all in one personal portfolio WordPress theme. You can customize everything.
            </p>
            <div class="border-b border-gray-300 dark:border-gray-500 mt-3"></div>
            <AppMenu/>
            <template #footer>
                <div class="flex items-center gap-2">
                </div>
            </template>
        </Drawer>

        <header class="py-2 sticky top-0 transition-colors duration-500 z-20 bg-surface-100 dark:bg-surface-900">
            <div class="container mx-auto">
                <nav class="flex justify-between p-2 items-center">
                    <Avatar image="/images/me-xl.png" 
                        class="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
                        size="xlarge" 
                        shape="circle" 
                    />
                    <div class="flex items-end">
                        <div class="block md:hidden">
                            <Button text 
                                size="large" 
                                @click="toggleMenu" 
                                severity="secondary" 
                                :aria-label="$t('openmenu')"
                            >
                                <Icon name="heroicons:bars-3" class="text-2xl"/>
                            </Button>
                        </div>                        
                        <div class="hidden md:block">
                            <AppMenu />
                        </div>
                        <div class="block">
                            <DarkModeSwitch />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">

const showMenu = ref(false)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

</script>

<style scoped>

p.description {
    font-size: 16px;
    line-height: 32px;
    padding-right: 7%;
}

</style>