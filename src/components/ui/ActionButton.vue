<template>
    <button
        class="text-center uppercase text-sm my-0 mx-2 py-2 px-0 w-20 h-20 rounded-xl bg-main-light"
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
