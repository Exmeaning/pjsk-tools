<script setup lang="ts">
interface Props {
    level?: "1" | "2" | "3" | "4" | "5" | "6";
}

const props = withDefaults(defineProps<Props>(), {
    level: "2"
});
const headingTag = `h${props.level}`;
</script>

<template>
    <div class="flex items-center gap-3 mb-6 relative">
        <div
            class="h-8 w-1.5 rounded-full bg-linear-to-b from-miku to-miku-dark shadow-[0_0_10px_rgba(51,204,187,0.4)]"
        ></div>
        <component
            :is="headingTag"
            class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight"
        >
            <slot />
        </component>
    </div>
</template>

<style scoped></style>
