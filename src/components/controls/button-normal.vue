<script setup lang="ts">
interface Props {
    disabled?: boolean;
    loading?: boolean;
    // 按钮类型：primary (初音色), secondary (描边色), ghost (幽灵色)
    type?: "primary" | "secondary" | "ghost";
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    type: "primary"
});

const emit = defineEmits(["click"]);

const handleClick = (e: MouseEvent) => {
    if (props.disabled || props.loading) return;
    emit("click", e);
};
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        :disabled="disabled || loading"
        class="relative inline-flex items-center justify-center overflow-hidden transition-all duration-200 rounded-full border-2 select-none cursor-pointer active:scale-95 w-full h-full font-[inherit]"
        :class="[
            // Primary: 填充初音色
            type === 'primary'
                ? 'bg-miku border-miku text-white shadow-lg shadow-miku/20 hover:bg-miku-dark hover:border-miku-dark'
                : '',

            // Secondary: 描边初音色
            type === 'secondary'
                ? 'bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border-miku text-miku-dark dark:text-miku hover:bg-miku hover:text-white'
                : '',

            // Ghost: 极简幽灵感
            type === 'ghost'
                ? 'bg-transparent border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                : '',

            // 禁用与加载状态
            disabled || loading
                ? 'opacity-50 cursor-not-allowed grayscale-[0.5] active:scale-100'
                : ''
        ]"
    >
        <div
            class="flex items-center justify-center gap-2 transition-transform duration-200"
            :class="loading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
        >
            <slot />
        </div>

        <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 scale-50"
            leave-active-class="transition duration-200"
            leave-to-class="opacity-0 scale-150"
        >
            <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
                <svg class="animate-spin size-5" viewBox="0 0 24 24">
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                        fill="none"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div>
        </Transition>

        <div
            class="absolute inset-0 bg-white/20 opacity-0 active:opacity-100 transition-opacity pointer-events-none"
        ></div>
    </button>
</template>

<style scoped>
/* 确保 slot 里的图标对齐 */
:deep(i),
:deep(img) {
    width: 1.2em;
    height: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
