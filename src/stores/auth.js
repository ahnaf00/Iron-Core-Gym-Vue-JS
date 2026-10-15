import { defineStore } from "pinia";
import api, { API_URL } from '../axios'
import axios from "axios";

export const useAuthStore = defineStore('auth',{
    state: () => ({
        user: null,
        isAuth:true,
        isAuthAttempted:false
    }),
    actions:{
        async login(email,password){
            await axios.get(`${API_URL}/sanctum/csrf-cookie`,{
                withCredentials:true
            });

            await api.post('/auth/login',{email,password});
            await this.fetchUser();
        },
        async fetchUser() {
            try{
                const response  = await api.get('/auth/me');
                this.user = response.data;
                this.isAuth = true
            }catch(error){
                this.user = null;
                this.isAuth = false
            }finally{
                this.isAuthAttempted = true
            }
        },
        async logout(){
            await api.post('/auth/logout');
            this.user = null;
            this.isAuth = false
        }
    }
});