<script setup lang="ts">
import ContainerPageBase from "@/components/containers/container-page-base.vue";
</script>

<template>
    <ContainerPageBase>
        <div
            class="container mx-auto px-4 sm:px-6 py-10 sm:py-20 flex flex-col items-center gap-8 sm:gap-12 text-center"
        >
            <slot />
        </div>
    </ContainerPageBase>
</template>

<style scoped></style>
