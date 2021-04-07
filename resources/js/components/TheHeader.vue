<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link to="/" class="nav-link">Главная</router-link>
                <router-link to="/users" class="nav-link">Пользователи</router-link>
                <router-link to="/countries" class="nav-link">Страны</router-link>
                <a href="#" class="nav-link" @click.prevent="authLogout">Выход</a>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions('app', ['authLogout'])
    }
}
</script>

<style scoped>

</style>
