<template>
    <div v-show="total > 1" class="ui-pager">
        <ul>
            <li v-if="showFirst"><a @click="btnClick(page-1)">上一页</a></li>
            <li v-for="index in indexs"  :class="{ 'active': page == index}">
                <a @click="btnClick(index)">{{ index }}</a>
            </li>
            <li v-if="showLast"><a @click="btnClick(page+1)">下一页</a></li>
            <li>
                <a>共<i>{{total}}</i>页</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        total: Number,
        page: Number,
    },
    computed: {
        indexs () {
            var left = 1
            var right = this.total
            var arr = []
            if (this.total >= 11) {
                if (this.page > 5 && this.page < this.total - 4) {
                        left = this.page - 5
                        right = this.page + 4
                }
                else {
                    if (this.page <= 5) {
                        left = 1
                        right = 10
                    }
                    else {
                        right = this.total
                        left = this.total -9
                    }
                }
            }
            while (left <= right) {
                arr.push(left)
                left++
            }
            return arr
        },
        showLast () {
            if(this.page == this.total){
                return false
            }
            return true
        },
        showFirst () {
            if (this.page == 1) {
                return false
            }
           return true
        }
    },
    methods: {
        btnClick (data) {//页码点击事件
            this.$emit('change', data)
        }
    }
}
</script>

<style lang="stylus">
@import '../css/def.styl'

.ui-pager li:first-child > a
    margin-left: 0px

.ui-pager
    margin: 0 auto
    user-select: none
    ul,li
        margin: 0px
        padding: 0px
        text-align: right
        font-size: 0

    li
        list-style: none
        display: inline-block

    a
        border: 1px solid #ddd
        text-decoration: none
        position: relative
        display: block
        padding: 6px 12px
        margin-left: -1px
        font-size: 13px
        line-height: 1.42857143
        color: $-base-color
        cursor: pointer
        &:hover
            background-color: #eee
    .active
        a
            color: #fff
            cursor: default
            background-color: $-dark-base-color
            border-color: #ddd

    i
        font-style:normal
        color: #999
        margin: 0px 4px

</style>
