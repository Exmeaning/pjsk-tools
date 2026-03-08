import { watchEffect } from "vue";
import { useStorage } from "@vueuse/core";

export const isDark = useStorage("theme-dark", false);

export function toggleDark() {
    isDark.value = !isDark.value;
}

watchEffect(() => {
    if (typeof window !== "undefined") {
        if (isDark.value) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
});
