<template>
    <footer
        class="relative container my-0 mx-auto font-inter text-xs pb-2 md:pb-8 flex justify-center items-center"
    >
        <div>Made with ♥ by Angel Aguirre &#169; {{ year }}</div>
    </footer>
</template>

<script setup>
import { computed } from 'vue';

const year = computed(() => {
    const _date = new Date();
    return _date.getFullYear();
});
</script>
