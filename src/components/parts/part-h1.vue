<script setup lang="ts"></script>

<template>
    <div class="text-center mb-8">
        <template v-if="$slots.tag">
            <div
                class="inline-flex items-center gap-2 px-4 py-2 border border-miku/30 bg-miku/5 dark:bg-miku/10 rounded-full mb-4 shadow-sm"
            >
                <span class="text-miku text-xs font-bold tracking-widest uppercase">
                    <slot name="tag" />
                </span>
            </div>
        </template>
        <template v-if="$slots.title">
            <h1 class="text-2xl sm:text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tight drop-shadow-sm">
                <slot name="title" />
            </h1>
        </template>
        <template v-if="$slots.subtitle">
            <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto font-medium">
                <slot name="subtitle" />
            </p>
        </template>
    </div>
</template>

<style scoped></style>
