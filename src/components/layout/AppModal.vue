<template>
    <Transition name="fade">
        <div
            v-if="isOpen"
            class="absolute top-0 left-0 right-0 z-10 min-h-screen"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                @click="toggleModal"
                class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></div>

            <div class="flex justify-center overflow-y-auto">
                <div class="flex justify-center w-96 p-4 text-center sm:p-0">
                    <div
                        class="relative bg-main-light rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-lg w-full"
                    >
                        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="flex justify-between mb-2 font-bold">
                                <slot name="title">Title</slot>
                                <button @click="toggleModal">
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { inject } from 'vue';

const isOpen = inject('isModalOpen');

const toggleModal = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
