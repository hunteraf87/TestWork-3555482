<template>
        <div class="container h-100">
            <app-toast></app-toast>
            <component :is="isAuthorized ? 'the-main' : 'the-not-auth'"></component>
        </div>
</template>

<script>

import TheMain from "./layouts/TheMain"
import TheNotAuth from "./layouts/TheNotAuth"
import AppToast from "./AppToast"
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters('app', ['isAuthorized'])
    },
    components: {AppToast,TheMain,TheNotAuth }
}
</script>

<style scoped>

</style>
