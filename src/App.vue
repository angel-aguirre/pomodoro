<template>
    <AppHeader />
    <AppActions />
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppActions from '@/components/AppActions.vue';
</script>

<style>
body {
    @apply bg-main;
    @apply text-white;
}
</style>
