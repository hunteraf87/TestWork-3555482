<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>Страны</h1>
                <app-spinner v-if="loading"></app-spinner>
                <table v-else class="table table-hover mt-5">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Сортировка</th>
                        <th scope="col">Видимость</th>
                        <th scope="col">Внешний идентификатор</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(country,idx) in countries"
                        :key="country.id"
                    >
                        <td>{{ idx + 1 }}</td>
                        <td>{{ country.name }}</td>
                        <td>{{ country.sort }}</td>
                        <td>{{ country.visible }}</td>
                        <td>{{ country.external_id }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import AppSpinner from "../AppSpinner"
import {mapGetters} from "vuex"

export default {
    mounted() {
        this.loading = true
        this.$store.dispatch('data/loadDataFromServer', 'countries')
            .finally(() => this.loading = false)
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        ...mapGetters('data', ['countries']),
    },
    components: { AppSpinner }
}
</script>

<style scoped>

</style>
