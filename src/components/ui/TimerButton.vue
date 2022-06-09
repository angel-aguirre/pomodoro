<template>
    <button :aria-label="label" class="h-14">
        <slot></slot>
    </button>
</template>
<script setup>
const props = defineProps({
    label: String,
});
</script>
