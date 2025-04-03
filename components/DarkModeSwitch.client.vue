<template>
    <Button type="button" 
        severity="secondary" 
        @click="changeTheme" 
        size="large"
        variant="text" 
        rounded
        class="bg-transparent"
    >
        <template #icon>
            <Icon :name="selectedTheme.icon" />
        </template>
    </Button>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme"

const { selectedTheme, changeTheme } = useTheme();
</script>