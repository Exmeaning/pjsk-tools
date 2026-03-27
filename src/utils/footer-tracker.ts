import { ref } from "vue";

export const footerOverlapHeight = ref(0);

let observer: IntersectionObserver | null = null;

export function useFooterTracker(el: HTMLElement | null) {
    if (!el) return;

    if (observer) observer.disconnect();

    observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0]!;
            if (entry.isIntersecting) {
                footerOverlapHeight.value = entry.intersectionRect.height;
            } else {
                footerOverlapHeight.value = 0;
            }
        },
        {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
        }
    );

    observer.observe(el);
}
