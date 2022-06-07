<template>
    <MainTimer :time="timeFormated" :description="actionLabel" />
    <ActionsTimer
        :timerFinished="timerFinished"
        @play="play"
        @pause="pause"
        @restart="restart"
    />
</template>

<script setup>
import { computed, defineProps, ref, toRefs, watch } from 'vue';
import { defaultSettings } from '@/utils/settings.js';
import MainTimer from '@/components/timer/MainTimer.vue';
import ActionsTimer from '@/components/timer/ActionsTimer.vue';

const mins = ref(defaultSettings.work.mins);
const secs = ref(0);
const timer = ref(null);
const started = ref(false);
const actionLabel = ref('Work');
const timerFinished = ref(false);

const props = defineProps({
    actionType: {
        type: String,
        default: 'work',
    },
});

const { actionType } = toRefs(props);

const timeFormated = computed(() => {
    return ('0' + mins.value).slice(-2) + ':' + ('0' + secs.value).slice(-2);
});

const play = () => {
    if (!started.value) {
        started.value = true;
        timerFinished.value = false;
    }

    timer.value = setInterval(function () {
        runTimer();
    }, 1000);
};

const pause = () => {
    clearInterval(timer.value);
    timer.value = null;
};

const restart = () => {
    clearInterval(timer.value);
    timer.value = null;
    started.value = false;
    timerFinished.value = true;
    mins.value = defaultSettings.work.mins;
    secs.value = 0;
};

const runTimer = () => {
    if (mins.value === 0 && secs.value === 0) {
        clearInterval(timer.value);
        timer.value = null;
        started.value = false;
        timerFinished.value = true;
        playAudio();
        return;
    }

    if (secs.value === 0) {
        mins.value--;
        secs.value = 59;
    } else {
        secs.value--;
    }
};

const playAudio = () => {
    const audio = new Audio(require('@/assets/audio/alarm_sound.mp3'));
    audio.play();
};

watch(actionType, (nuevaAccion) => {
    const config = defaultSettings[nuevaAccion];

    clearInterval(timer.value);
    timer.value = null;
    started.value = false;
    timerFinished.value = true;

    actionLabel.value = config.label;
    mins.value = config.mins;
    secs.value = 0;
});
</script>
