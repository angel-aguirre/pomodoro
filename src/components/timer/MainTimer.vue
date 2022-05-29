<template>
    <div
        class="p-6 my-0 mx-auto mt-10 rounded-[50%] w-72 h-72 text-center bg-main-light"
    >
        <div
            class="rounded-[50%] w-60 h-60 text-center border-8 border-soft-red bg-main"
        >
            <div
                class="flex items-center justify-center flex-col rounded-[50%] w-60 h-60 text-center -m-2"
            >
                <span class="text-6xl">{{ time }}</span>
                <span class="text-xl">{{ description }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    time: {
        type: String,
        default: '00:00',
    },
    description: {
        type: String,
        default: 'WORK',
    },
});
</script>
