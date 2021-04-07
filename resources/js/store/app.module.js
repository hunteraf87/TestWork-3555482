import router from "../router";

export default {
    namespaced: true,
    state: () => ({
        access_token: localStorage.getItem('access_token') || '',
        toast: {
            show: false,
            text: ''
        }
    }),
    mutations: {
        setToken(state, value){
            state.access_token = value
        },
        showToast(state, value){
            state.toast = {show: true, text: value}
        },
        hideToast(state){
            state.toast.show = false
        }
    },
    actions: {
        authSuccess({commit}){
            localStorage.setItem('access_token', 'test')
            commit('setToken', 'test')
        },
        authLogout({commit}){
            localStorage.removeItem('access_token')
            commit('setToken', '')
            router.push('/')
        }
    },
    getters: {
        isAuthorized(state) {
            return !!state.access_token;
        },
        toast(state){
            return state.toast
        }
    }
}
