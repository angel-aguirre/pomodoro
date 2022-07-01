<template>
    <div class="flex justify-center mt-12 md:mt-16 px-5 sm:gap-10 md:gap-2">
        <ActionButton label="Work" @click="work" />
        <ActionButton label="Short Break" @click="shortBreak" />
        <ActionButton label="Long Break" @click="longBreak" />
    </div>
</template>

<script setup>
import { useTimer } from '@/stores/timer.js';
import ActionButton from '@/components/ui/ActionButton.vue';

const timerStore = useTimer();

const work = () => timerStore.setAction('work');
const shortBreak = () => timerStore.setAction('shortBreak');
const longBreak = () => timerStore.setAction('longBreak');
</script>
