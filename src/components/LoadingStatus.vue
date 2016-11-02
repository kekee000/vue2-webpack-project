<template>
    <div v-if="loading || (!loading && !records)" :class="listClass">
       {{showText}}
    </div>
</template>
<script>
export default {
    props: ['loading', 'records', 'loadingText', 'noRecordText'],
    data () {
        return {}
    },
    computed: {
        listClass () {
            if (this.loading) {
                return 'table-list-loading'
            }
            else if (!this.loading && !this.records) {
                return 'table-list-norecord'
            }
            return ''
        },
        showText () {
            return this.loading
                ? (this.loadingText || '正在加载...')
                : (this.noRecordText || '没有相关内容.')
        }
    }
}
</script>
<style lang="stylus">
.table-list-norecord,
.table-list-loading
    line-height: 100px
    color: #ccc
    text-align: center

</style>
