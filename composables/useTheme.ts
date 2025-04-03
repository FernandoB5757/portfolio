
import type { Theme } from '@/types/index'

export const useTheme = () => {
    const colorMode = useColorMode() // 'dark' | 'light' | 'system'
    
    const isDark = computed(() => colorMode.value === 'dark')

    const themes = ref<Theme[]>([
        { 'key': 'system', 'label': 'System', 'icon': 'heroicons:computer-desktop' },
        { 'key': 'light', 'label': 'Light', 'icon': 'heroicons:sun' },
        { 'key': 'dark', 'label': 'Dark', 'icon': 'heroicons:moon' },
    ])
    
    const index = ref<number>(0)

    index.value = themes.value.findIndex((theme: Theme) => theme.key === colorMode.preference)

    const selectedTheme = ref(themes.value[index.value])

    const changeTheme = () => {
        index.value = index.value < 2 ? index.value + 1 : 0
        colorMode.preference = themes.value[index.value].key
        selectedTheme.value = themes.value[index.value]
    }

    return { 
        colorMode,
        isDark,
        themes,
        index,
        selectedTheme,
        changeTheme
    }
  }