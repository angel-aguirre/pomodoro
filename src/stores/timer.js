import { defineStore } from 'pinia';
import { formatTime } from '@/utils/format.js';
import { useSettings } from '@/stores/settings.js';

export const useTimer = defineStore('timer', {
    state: () => {
        return {
            isPaused: false,
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
                this.isStarted = true;
                this.isFinished = false;
                this.setAction(this.action);
            }

            this.interval = setInterval(() => {
                this.runTimer();
                this.updateTitle();
            }, 1000);
        },
        pause() {
            clearInterval(this.interval);
            this.interval = null;
        },
        restart() {
            clearInterval(this.interval);
            this.resetValues();
            this.setAction(this.action);
        },
        setAction(action) {
            const settingsStore = useSettings();

            this.action = action;
            this.mins = settingsStore[this.action].mins;
            this.label = settingsStore[this.action].label;

            this.resetValues();
        },
        runTimer() {
            if (this.mins === 0 && this.secs === 0) {
                clearInterval(this.interval);
                this.resetValues();
                // play audio here
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
            this.interval = null;
            this.isStarted = false;
            this.isFinished = true;
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
