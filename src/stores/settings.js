import { defineStore } from 'pinia';
import { defaultSettings } from '@/utils/settings.js';

const _settings =
    JSON.parse(localStorage.getItem('pomodoro')) || defaultSettings;

export const useSettings = defineStore('settings', {
    state: () => {
        return { ..._settings };
    },
});
