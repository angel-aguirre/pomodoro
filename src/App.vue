<template>
    <AppHeader />
    <AppActions @action="action" />
    <AppTimer :actionType="actionType" />
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppActions from '@/components/AppActions.vue';
import AppTimer from '@/components/AppTimer.vue';

const actionType = ref('work');

const action = (tipo) => {
    actionType.value = tipo;
};
</script>

<style>
body {
    @apply bg-main;
    @apply text-white;
}
</style>
