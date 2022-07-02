import { defineStore } from 'pinia';
import { formatTime } from '@/utils/format.js';
import { audioPlayer } from '@/utils/player.js';
import { useSettings } from '@/stores/settings.js';

export const useTimer = defineStore('timer', {
    state: () => {
        return {
            isPaused: true,
            isFinished: false,
            isStarted: false,
            mins: 0,
            secs: 0,
            label: null,
            action: null,
            interval: null,
        };
    },
    getters: {
        timeFormated: (state) => {
            return formatTime(state.mins, state.secs);
        },
    },
    actions: {
        play() {
            if (!this.isStarted) {
                this.setAction(this.action);
                this.isStarted = true;
                this.isFinished = false;
            }

            this.isPaused = false;
            this.interval = setInterval(() => {
                this.runTimer();
                this.updateTitle();
            }, 1000);
        },
        pause() {
            clearInterval(this.interval);
            this.interval = null;
            this.isPaused = true;
        },
        restart() {
            this.setAction(this.action);
        },
        setAction(action) {
            const settingsStore = useSettings();

            this.action = action;
            this.mins = settingsStore[this.action].mins;
            this.label = settingsStore[this.action].label;
            this.secs = 0;

            this.resetValues();
        },
        runTimer() {
            if (this.mins === 0 && this.secs === 0) {
                const settingsStore = useSettings();
                const player = audioPlayer(settingsStore.alarmFileName);
                player.play();

                clearInterval(this.interval);
                this.resetValues();
                return;
            }

            if (this.secs === 0) {
                this.mins--;
                this.secs = 59;
            } else {
                this.secs--;
            }
        },
        resetValues() {
            clearInterval(this.interval);
            this.interval = null;
            this.isStarted = false;
            this.isFinished = true;
            this.isPaused = true;
            this.updateTitle();
        },
        updateTitle() {
            if (this.isFinished) {
                document.title = `${process.env.VUE_APP_TITLE}`;
                return;
            }

            document.title = `(${formatTime(this.mins, this.secs)}) ${
                process.env.VUE_APP_TITLE
            }`;
        },
    },
});
