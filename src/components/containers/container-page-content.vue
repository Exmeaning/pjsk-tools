<script setup lang="ts">
import ContainerPageBase from "@/components/containers/container-page-base.vue";
</script>

<template>
    <ContainerPageBase>
        <div class="container mx-auto px-4 sm:px-6 py-8 flex items-center justify-center flex-col w-full">
            <div class="w-full max-w-5xl">
                <slot />
            </div>
        </div>
    </ContainerPageBase>
</template>

<style scoped></style>
