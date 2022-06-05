<template>
    <MainTimer :time="timeFormated" />
    <ActionsTimer @play="play" @pause="pause" @replay="replay" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { defaultSettings } from '@/utils/settings.js';
import MainTimer from '@/components/timer/MainTimer.vue';
import ActionsTimer from '@/components/timer/ActionsTimer.vue';

const mins = ref(defaultSettings.minsWork);
const secs = ref(0);
const timer = ref(null);
const started = ref(false);

const timeFormated = computed(() => {
    return ('0' + mins.value).slice(-2) + ':' + ('0' + secs.value).slice(-2);
});

const play = () => {
    if (!started.value) {
        started.value = true;
    }

    timer.value = setInterval(function () {
        runTimer();
    }, 1000);
};

const pause = () => {
    clearInterval(timer.value);
    timer.value = null;
};

const replay = () => {
    console.log('replay');
};

function runTimer() {
    if (mins.value === 0 && secs.value === 0) {
        clearInterval(timer.value);
        timer.value = null;
        return;
    }

    if (secs.value === 0) {
        mins.value--;
        secs.value = 59;
    } else {
        secs.value--;
    }
}
</script>
