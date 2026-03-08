<script setup lang="ts">
import CardBase from "@/components/containers/card-base.vue";
</script>

<template>
    <CardBase class="group">
        <template v-if="$slots.icon">
            <div
                class="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(51,204,187,0.5)]"
            >
                <slot name="icon" />
            </div>
        </template>
        <template v-if="$slots.label || $slots.subLabel">
            <div>
                <template v-if="$slots.label">
                    <h3
                        class="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-miku transition-colors duration-300"
                    >
                        <slot name="label" />
                    </h3>
                </template>
                <template v-if="$slots.subLabel">
                    <p
                        class="text-[10px] text-slate-400 dark:text-slate-500 font-bold tracking-wider uppercase group-hover:text-miku-dark/80 transition-colors duration-300"
                    >
                        <slot name="subLabel" />
                    </p>
                </template>
            </div>
        </template>
    </CardBase>
</template>

<style scoped></style>
