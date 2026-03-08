<script setup lang="ts"></script>

<template>
    <div
        class="p-4 sm:p-6 rounded-2xl glass-card hover:bg-white/50 dark:hover:bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-900/50 border border-white/40 dark:border-white/5 flex flex-col items-center gap-3 text-center h-full justify-center group overflow-hidden relative"
    >
        <!-- Subtle gradient overlay on hover -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <slot />
    </div>
</template>

<style scoped></style>
