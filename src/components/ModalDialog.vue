<template>
<div class="modal model-component fade" :class="opts.skin" role="dialog">
  <div class="modal-dialog" role="document" :class="[fullscreen ? 'modal-fullscreen' : '']">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="close"><span aria-hidden="true">&times;</span></button>
        <button v-if="opts.showFullscreen" type="button" class="close btn-fullscreen"
            @click="onFullscreen" title="全屏"><span aria-hidden="true">▣</span></button>
        <h4 class="modal-title">{{ title }}</h4>
      </div>
      <div class="modal-body">
          <slot></slot>
      </div>
      <slot name="footer">
          <div class="modal-footer">
            <button v-if="opts.showClose" type="button" role="close" class="btn btn-default"
                @click="close">{{ opts.closeText }}</button>
            <button type="button" role="confirm" class="btn btn-dark"
                @click="confirm">{{ opts.confirmText }}</button>
          </div>
      </slot>
    </div>
  </div>
</div>
</template>
<script>

export default {
    props: {
        'show': Boolean,
        'title': String,
        'options': Object
    },
    data () {
        var options = this.options || {}
        return {
            fullscreen: false,
            opts: {
                skin: options.skin || '',
                closeText: options.closeText || '关闭',
                confirmText: options.confirmText || '确定',
                showClose: false !== options.showClose,
                showFullscreen: !!options.showFullscreen
            }
        }
    },
    replace: true,
    mounted () {
        this.$watch('show', function (show) {
            if (show) {
                this.showDialog()
            }
            else {
                this.closeDialog()
            }
        })
        if (this.show) {
            this.showDialog()
        }
    },
    methods: {
        showDialog () {
            this.$el.style.display = 'block'
            var self = this
            $(document.body).addClass('modal-open')
            setTimeout(function () {
                $(self.$el).addClass('in')
            }, 1)
        },
        closeDialog () {
            var self = this
            $(self.$el).removeClass('in')
            setTimeout(function () {
                self.$el.style.display = 'none'
                $(document.body).removeClass('modal-open')
            }, 300)
        },
        close () {
            this.closeDialog()
            this.$emit('close')
        },
        confirm () {
            this.$emit('confirm')
        },
        onFullscreen () {
            this.fullscreen = !this.fullscreen;
            this.$emit('fullscreen', {
                fullscreen: this.fullscreen
            });
        }
    }
}
</script>
<style lang="stylus">
@import '../css/def.styl'
.model-component
    .modal-title
        line-height: 100%
        text-align: left
    .modal-content
        overflow: hidden
    .modal-header
        background-color: darken($-base-color, 10%)
        color: #fff
        text-align: center

    .btn-fullscreen
        margin-top: 0
        margin-right: 6px
    .modal-fullscreen
        margin: 0!important
        width: 100%!important
        height: 100%!important
        .modal-content
            width: 100%!important
            height: 100%!important

@media (min-width: 768px)
    .model-component .modal-dialog
        width: 800px
</style>
