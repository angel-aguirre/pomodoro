<template>
    <Teleport to="body">
        <AppModal>
            <template #title>Settings</template>
            <div class="pt-4 pb-6 border-t">
                <p class="font-bold">Time (minutes)</p>
                <div class="flex justify-between">
                    <div class="flex flex-col w-24">
                        <label class="text-sm" for="pomodoro">Pomodoro</label>
                        <input
                            class="text-black p-1 rounded text-right outline-none appearance-none"
                            id="pomodoro"
                            type="number"
                        />
                    </div>
                    <div class="flex flex-col w-24">
                        <label class="text-sm" for="short-break"
                            >Short Break</label
                        >
                        <input
                            class="text-black p-1 rounded text-right outline-none appearance-none"
                            id="short-break"
                            type="number"
                        />
                    </div>
                    <div class="flex flex-col w-24">
                        <label class="text-sm" for="long-break"
                            >Long Break</label
                        >
                        <input
                            class="text-black p-1 rounded text-right outline-none appearance-none"
                            id="long-break"
                            type="number"
                        />
                    </div>
                </div>
            </div>
            <div class="flex justify-between pt-4 pb-6 border-t items-center">
                <p class="text-sm">Auto start Breaks?</p>
                <label
                    for="switch-auto-breaks"
                    class="flex items-center cursor-pointer relative"
                >
                    <input
                        type="checkbox"
                        id="switch-auto-breaks"
                        class="sr-only"
                    />
                    <div
                        class="toggle-bg bg-gray-200 border-2 border-gray-200 h-8 w-14 rounded-full"
                    ></div>
                </label>
            </div>
            <div class="flex justify-between pt-4 pb-6 border-t items-center">
                <p class="text-sm">Auto start Pomodoros?</p>
                <label
                    for="switch-auto-pomodoros"
                    class="flex items-center cursor-pointer relative"
                >
                    <input
                        type="checkbox"
                        id="switch-auto-pomodoros"
                        class="sr-only"
                    />
                    <div
                        class="toggle-bg bg-gray-200 border-2 border-gray-200 h-8 w-14 rounded-full"
                    ></div>
                </label>
            </div>
            <div class="flex justify-between pt-4 pb-6 border-t items-center">
                <label class="text-sm" for="long-break-interval"
                    >Long Break interval</label
                >
                <input
                    class="text-black p-1 rounded text-right outline-none appearance-none w-1/3"
                    id="long-break-interval"
                    type="number"
                />
            </div>
        </AppModal>
    </Teleport>
</template>

<script setup>
import AppModal from '@/components/layout/AppModal.vue';
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.toggle-bg:after {
    content: '';
    @apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-7 w-7 transition duration-300 shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(100%);
    @apply border-white;
}

input:checked + .toggle-bg {
    @apply bg-green-400 border-green-400 transition;
}
</style>
