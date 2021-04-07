<template>
    <div v-if="toast.show" class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0;">
        <div id="liveToast" class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
            <div class="toast-header">
                <strong class="mr-auto">Информация</strong>
                <button type="button" class="ml-2 mb-1 close" @click="$store.commit('app/hideToast')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
               {{ toast.text }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapGetters('app', ['toast'])
    },
    methods:{
        ...mapMutations('app', ['hideToast'])
    }
}
</script>

<style scoped>

</style>
