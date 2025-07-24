<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
        <main>
            <AppHeader />
            <slot />
            <ScrollTop />
            <footer>
                <AppFooter />
            </footer>
             <Icon name="heroicons:computer-desktop" class="!hidden" />
            <Icon name="heroicons:sun" class="!hidden" />
            <Icon name="heroicons:moon" class="!hidden" />
            <Icon name="heroicons:x-mark" class="!hidden" />
            <Icon name="heroicons:arrow-right-circle" class="!hidden" />

            <Icon name="circle-flags:us-um" class="!hidden" />
            <Icon name="circle-flags:mx" class="!hidden"  />
        </main>
    </Html>
</template>

<script setup>
const head = useLocaleHead()
</script>
