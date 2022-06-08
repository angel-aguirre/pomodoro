<template>
    <div class="flex justify-center mt-12 md:mt-16 px-5 sm:gap-10 md:gap-2">
        <ActionButton label="Work" @click="work" />
        <ActionButton label="Short Break" @click="shortBreak" />
        <ActionButton label="Long Break" @click="longBreak" />
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import ActionButton from '@/components/ui/ActionButton.vue';

const emit = defineEmits(['action']);

const work = () => emit('action', 'work');
const shortBreak = () => emit('action', 'shortBreak');
const longBreak = () => emit('action', 'longBreak');
</script>
