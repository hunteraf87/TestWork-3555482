import Vue from 'vue'
import Vuex from "vuex"
import moduleApp from './app.module'
import moduleData from './data.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app: moduleApp,
        data: moduleData
    }
})

export default store
