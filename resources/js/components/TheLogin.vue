<template>
    <div class="row h-100">
        <div class="col-6 mx-auto">
            <div class="d-flex align-items-center justify-content-center flex-column h-100">
                <div class="text-center">
                    <h1>Авторизация</h1>
                </div>
                <form class="w-100 mt-3">
                    <div class="form-group">
                        <label for="email">Адрес электронной почты</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input type="password" class="form-control" id="password">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary" @click.prevent="submitAuth">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        submitAuth(){
            this.$store.dispatch('app/authSuccess')
        }
    }
}
</script>

<style scoped>

</style>
