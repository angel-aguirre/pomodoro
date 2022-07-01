<template>
    <div
        class="p-6 my-0 mx-auto mt-6 md:mt-16 rounded-50 w-72 h-72 text-center bg-main-light"
    >
        <div
            :class="[
                timerStore.label == 'WORK'
                    ? 'border-soft-green'
                    : 'border-soft-red',
            ]"
            class="rounded-50 w-60 h-60 text-center border-8 bg-main"
        >
            <div
                class="flex items-center justify-center flex-col rounded-50 w-60 h-60 text-center -m-2"
            >
                <span class="text-5xl md:text-6xl">{{
                    timerStore.timeFormated
                }}</span>
                <span class="text-lg md:text-2xl">{{ timerStore.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTimer } from '@/stores/timer.js';

const timerStore = useTimer();

timerStore.setAction('work');
</script>
