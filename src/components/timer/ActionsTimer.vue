<template>
    <div
        class="flex justify-evenly items-center -mt-12 mb-6 mx-auto w-72 h-16 rounded-3xl bg-main-light"
    >
        <!-- Play -->
        <TimerButton v-show="!isPaused" @click="play">
            <svg
                version="1.1"
                x="0px"
                y="0px"
                width="163.861px"
                height="163.861px"
                viewBox="0 0 163.861 163.861"
                style="enable-background: new 0 0 163.861 163.861"
                xml:space="preserve"
            >
                <g>
                    <path
                        d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
								c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                    ></path>
                </g>
            </svg>
        </TimerButton>
        <!-- Pause -->
        <TimerButton v-show="isPaused" @click="pause">
            <svg
                version="1.1"
                x="0px"
                y="0px"
                width="45.975px"
                height="45.975px"
                viewBox="0 0 45.975 45.975"
                style="enable-background: new 0 0 45.975 45.975"
                xml:space="preserve"
            >
                <g>
                    <g>
                        <path
                            d="M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z"
                        ></path>
                        <path
                            d="M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z"
                        ></path>
                    </g>
                </g>
            </svg>
        </TimerButton>
        <!-- Restart -->
        <TimerButton @click="restart">
            <svg
                version="1.1"
                x="0px"
                y="0px"
                width="305.836px"
                height="305.836px"
                viewBox="0 0 305.836 305.836"
                style="enable-background: new 0 0 305.836 305.836"
                xml:space="preserve"
            >
                <g>
                    <path
                        d="M152.924,300.748c84.319,0,152.912-68.6,152.912-152.918c0-39.476-15.312-77.231-42.346-105.564
								c0,0,3.938-8.857,8.814-19.783c4.864-10.926-2.138-18.636-15.648-17.228l-79.125,8.289c-13.511,1.411-17.999,11.467-10.021,22.461
								l46.741,64.393c7.986,10.992,17.834,12.31,22.008,2.937l7.56-16.964c12.172,18.012,18.976,39.329,18.976,61.459
								c0,60.594-49.288,109.875-109.87,109.875c-60.591,0-109.882-49.287-109.882-109.875c0-19.086,4.96-37.878,14.357-54.337
								c5.891-10.325,2.3-23.467-8.025-29.357c-10.328-5.896-23.464-2.3-29.36,8.031C6.923,95.107,0,121.27,0,147.829
								C0,232.148,68.602,300.748,152.924,300.748z"
                    ></path>
                </g>
            </svg>
        </TimerButton>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, toRefs, watch } from 'vue';
import TimerButton from '@/components/ui/TimerButton.vue';

const isPaused = ref(false);

const emit = defineEmits(['play', 'pause', 'restart']);

const props = defineProps({
    timerFinished: {
        type: Boolean,
        default: true,
    },
});

const { timerFinished } = toRefs(props);

const play = () => {
    isPaused.value = !isPaused.value;
    emit('play');
};

const pause = () => {
    isPaused.value = !isPaused.value;
    emit('pause');
};

const restart = () => {
    emit('restart');
};

watch(timerFinished, (value) => {
    if (value) isPaused.value = false;
});
</script>

<style scoped>
svg {
    @apply fill-white;
    @apply h-12;
    @apply w-12;
}
</style>
