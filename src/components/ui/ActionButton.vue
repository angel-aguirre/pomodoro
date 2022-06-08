<template>
    <button
        class="text-center uppercase text-xs sm:text-lg my-0 mx-2 p-2 w-20 md:w-40 h-20 md:h-24 rounded-xl bg-main-light"
    >
        <span class="w-20 h-20 break-words">{{ label }}</span>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    label: {
        type: String,
        default: '',
    },
});
</script>
