import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosClient from '@/axios/axiosClient';

export const useUserStore = defineStore('user', () => {
    const registro = ref({
        usuario: null,
        email: null,
        password: null,
    });
    const login = ref({
        username: null,
        password: null,
    });

    return { registro, login };
});
