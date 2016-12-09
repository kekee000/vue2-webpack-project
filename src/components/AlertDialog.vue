<template>
<section class="modal-alert">
    <modal-dialog :title="options.title" :show.sync="show" :options="options" @confirm="confirm">
        <p>{{options.content}}</p>
    </modal-dialog>
</section>
</template>
<script>
export default {
    props: ['options', 'show'],
    components: {
        ModalDialog: require('./ModalDialog.vue')
    },
    methods: {
        confirm () {
            this.show = false
            this.$emit('confirm', {
                content: this.options.content
            })
        }
    }
}
</script>
<style lang="stylus">
@import '../css/def.styl'
.modal-alert
    .modal-dialog
        width: 386px
    .modal-footer
        text-align: left
        .btn
            width: 45%
            &[role="confirm"]
                float: right

</style>
