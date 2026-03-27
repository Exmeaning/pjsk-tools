<script setup lang="ts">
import { useFooterTracker } from "@/utils/footer-tracker.ts";
import { ref, onMounted, type VNodeRef } from "vue";
const footerRef = ref<HTMLElement | null>(null);

onMounted(() => {
    useFooterTracker(footerRef.value);
});
</script>

<template>
    <footer
        ref="footerRef"
        class="w-full mt-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 py-4 text-center text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300 [view-timeline-name:--footer-timeline] [view-timeline-axis:block]"
    >
        <span>
            © 2026
            <a href="https://github.com/Bluemangoo" class="underline hover:text-miku">Bluemangoo</a
            >. All rights reserved.
        </span>
    </footer>
</template>

<style scoped></style>
