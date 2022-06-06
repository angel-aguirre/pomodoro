<template>
    <div class="flex justify-around mt-12 px-5">
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
