<script setup lang="ts">
interface Props {
    modelValue: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    rows?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: "",
    disabled: false,
    readonly: false,
    rows: 3
});

const emit = defineEmits(["update:modelValue", "change", "focus", "blur"]);

const handleInput = (e: Event) => {
    emit("update:modelValue", (e.target as HTMLTextAreaElement).value);
};
</script>

<template>
    <div
        class="inline-flex rounded-lg border-2 transition-all duration-200 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md w-full h-full font-[inherit] overflow-hidden"
        :class="[
            disabled
                ? 'opacity-50 cursor-not-allowed border-zinc-200'
                : 'border-miku/20 focus-within:border-miku focus-within:shadow-sm'
        ]"
    >
        <textarea
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :rows="rows"
            @input="handleInput"
            @change="(e) => emit('change', (e.target as HTMLTextAreaElement).value)"
            @focus="(e) => emit('focus', e)"
            @blur="(e) => emit('blur', e)"
            class="w-full h-full px-5 py-4 bg-transparent border-none outline-none resize-none text-zinc-700 dark:text-zinc-200 font-[inherit] placeholder:text-zinc-400/60"
        ></textarea>
    </div>
</template>

<style scoped>
textarea::-webkit-scrollbar {
    width: 6px;
}
textarea::-webkit-scrollbar-thumb {
    background: var(--color-miku);
    border-radius: 10px;
    opacity: 0.5;
}
textarea::-webkit-scrollbar-track {
    background: transparent;
}
</style>
