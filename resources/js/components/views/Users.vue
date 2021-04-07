<template>

    <div>

        <div class="row">
            <div class="col-12">
                <h1>Пользователи</h1>
                <app-spinner v-if="loading"></app-spinner>
                <table v-else class="table table-hover mt-5">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя</th>
                        <th scope="col">email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user,idx) in users"
                        :key="user.id"
                        style="cursor: pointer"
                        @click="editUser(idx)"
                    >
                        <td>{{ idx + 1 }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                    </tr>
                    </tbody>
                </table>
                <button type="button"
                        class="btn btn-primary mt-3"
                        @click="editUser()"
                >Создать</button>
            </div>
        </div>

        <div v-if="showModal" class="modal fade show" style="display: block" id="staticBackdrop" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">{{ user.id ? 'Редактирование' : 'Создание' }}</h5>
                        <button type="button" class="close" @click="showModal = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Имя</label>
                            <input type="text" class="form-control" id="name"
                                   v-model.trim="user.name"
                                   :class="{'is-invalid': errors.name}"
                                   @change="validateUser"
                            >
                            <div class="invalid-feedback" v-if="errors.name">
                                {{ errors.name }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Адрес электронной почты</label>
                            <input type="email" class="form-control" id="email"
                                   v-model.trim="user.email"
                                   :class="{'is-invalid': errors.email}"
                                   @change="validateUser"
                            >
                            <div class="invalid-feedback" v-if="errors.email">
                                {{ errors.email }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Пароль</label>
                            <input type="password" class="form-control" id="password" v-model.trim="user.password"
                                   :class="{'is-invalid': errors.password }" @change="validateUser">
                            <div class="invalid-feedback" v-if="errors.password ">
                                {{ errors.password }}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-primary"
                                @click="saveUser"
                                :disabled="saving || !formIsValid"
                        >
                            <span class="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                  v-if="saving"
                            ></span>
                            {{ saving ? 'Сохранение' : 'Сохранить' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import {mapGetters,mapActions} from "vuex";
import AppSpinner from "../AppSpinner";
import {email,minLength} from "../../rules";

export default {
    mounted() {
        this.loading = true
        this.$store.dispatch('data/loadDataFromServer', 'users')
            .finally(() => {
                console.log('loaded')
                this.loading = false
            })
        this.resetUser()
    },
    data(){
        return {
        loading: false,
        saving: false,
        showModal: false,
        user: null,
        rules: {email,minLength},
        errors: {name: '', email: '', password: ''}
    }},
    computed: {
        ...mapGetters('data', ['users']),
        formIsValid(){
            console.log(123)
            return Object.values(this.errors).reduce((val, e) => val && e === '', true)
        }
    },
    methods: {
        ...mapActions('data', ['saveUserData']),
        editUser(idx = null){
            this.showModal = true
            if(idx !== null) {
                this.user = {...this.users[idx], password: ''}
            } else {
                this.resetUser()
            }
            this.validateUser()
        },
        saveUser(){
            this.saving = true
            this.saveUserData(this.user)
                .finally(() => {
                    this.saving = false
                    this.showModal = false
                })
        },
        resetUser(){
            this.user = {
                name: '',
                email: '',
                password: ''
            }
        },
        validateUser(){

            if(!this.user.name.length)
                this.errors.name = 'Введите данные в поле'
            else
                this.errors.name = ''

            if(!this.rules.email(this.user.email))
                this.errors.email = 'Введите корректный email'
            else
                this.errors.email = ''

            let trigger = !this.user.id
                ? this.rules.minLength(this.user.password, 6)
                : (this.user.password.length === 0 || this.rules.minLength(this.user.password, 6))
            this.errors.password = trigger ? '' : 'Пароль должен содержать не менее 6 символов'
        }
    },
    components: { AppSpinner }
}
</script>


