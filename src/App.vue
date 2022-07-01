<template>
    <AppHeader />
    <AppActions />
    <AppTimer />
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppActions from '@/components/AppActions.vue';
import AppTimer from '@/components/AppTimer.vue';
</script>

<style>
body {
    @apply bg-main;
    @apply text-white;
}
</style>
