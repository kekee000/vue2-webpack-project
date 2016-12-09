<template>
<section class="modal-prompt">
    <modal-dialog :title="title" :show="show" @confirm="confirm" @close="close">
        <div class="form-group gap-left gap-right gap-bottom-small">
            <div v-if="opt.text" class="prompt-text gap-bottom">{{ opt.text }}</div>
            <textarea
                v-model="content" class="form-control"
                :placeholder="opt.placeholder">
            </textarea>
        </div>
    </modal-dialog>
</section>
</template>
<script>
import ModalDialog from './ModalDialog.vue'
export default {
    props: {
        show: Boolean,
        title: String,
        options: Object
    },
    components: {
        ModalDialog
    },

    data () {
        var opt = this.options || {}
        opt.text = this.options.text || ''
        opt.placeholder = this.options.placeholder || ''
        return {
            opt: opt,
            content: this.options.content || ''
        }
    },
    methods: {
        confirm () {
            this.$emit('confirm', {
                content: this.content
            })
        },
        close () {
            this.$emit('close', {
                content: this.content
            })
        }
    }
}
</script>
<style lang="stylus">
@import '../css/def.styl'
.modal-prompt
    .modal-dialog
        width: 386px
    .modal-footer
        text-align: left
        .btn
            width: 45%
            &[role="confirm"]
                float: right

    .prompt-text
        color: #8b8d93

</style>
