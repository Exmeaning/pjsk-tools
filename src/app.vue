<script setup lang="ts">
import aJump from "@/utils/a-jump.ts";
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";

aJump.update();
</script>

<template>
  <div class="flex flex-col min-h-screen [timeline-scope:--footer-timeline]">
    <navbar />
    <div class="w-full max-w-7xl mx-auto flex flex-col min-w-0 overflow-x-hidden">
        <component v-bind:is="aJump.component.value"></component>
    </div>
    <Footer />
  </div>
</template>

<style>
.footer-tracker {
    view-timeline-name: --footer-timeline;
    view-timeline-axis: block;
}
</style>