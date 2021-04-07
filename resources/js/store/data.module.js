export default {
    namespaced: true,
    state: () => ({
        countries: [],
        users: []
    }),
    mutations: {
        setDataValues(state, {prop, data}){
            state[prop] = data
        },
        pushUser(state, data){
            state.users.push(data)
        },
        changeUser(state, data){
            const idx = state.users.findIndex(e => e.id === data.id)
            if(idx >=0)
                state.users.splice(idx, 1, data)
        }
    },
    actions: {
        loadDataFromServer({commit}, type){
            return axios.get(`/api/${type}`)
                .then(({data}) => {
                    commit('setDataValues', {prop: type, data})
                })
                .catch((err) => console.warn(err))
        },
        saveUserData({commit}, data){
            if(!data.password.length)
                delete data.password
            if (data.id) {
                return axios.put(`/api/users/${data.id}`,
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then(({data}) => {
                        commit('changeUser', data)
                    })
                    .catch((err) => {
                        commit('app/showToast', 'Ошибка при сохранении данных.', {root: true})
                        console.log(err)
                    })
            } else {
                return axios.post('/api/users',
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                    .then(({data}) => {
                        commit('pushUser', data)
                    })
                    .catch((err) => {
                        commit('app/showToast', 'Ошибка при сохранении данных.', {root: true})
                        console.log(err)
                    })
            }
        }
    },
    getters: {
        users(state) {
            return state.users;
        },
        countries(state) {
            return state.countries;
        }
    }
}
