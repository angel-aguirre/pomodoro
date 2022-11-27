<template>
    <AppHeader />
    <div class="flex h-full flex-col">
        <AppActions />
        <AppTimer />
    </div>
    <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppActions from '@/components/AppActions.vue';
import AppTimer from '@/components/AppTimer.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<style>
html,
body {
    @apply h-full;
}

body {
    @apply bg-main;
    @apply text-white;
}

#app {
    @apply h-full flex flex-col;
}
</style>
