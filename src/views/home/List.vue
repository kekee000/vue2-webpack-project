<template>
    <section class="main-container list-view">
        <div class="btn-groups">
            <router-link class="btn btn-dark btn-right" :to="'/home/profile'">个人信息</router-link>
        </div>
        <table class="table-list gap-top-fit">
            <thead>
                <tr>
                    <td>真实姓名</td>
                    <td>昵称</td>
                    <td>电话</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in list">
                    <td>{{ row.name }}</td>
                    <td>{{ row.nickname }}</td>
                    <td>{{ row.phone }}</td>
                    <td class="table-act">
                       <router-link :to="{ path: '/home/detail', query: {id: row.id} }">查看详情</router-link>
                       <a @click="doDel(row)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <pager :total="total" :page="page" @change="pageChange" class="gap-top"></pager>
        <loading-status :loading="loading" :records="list.length"></loading-status>
    </section>
</template>
<script>
import Pager from 'components/Pager.vue'
import LoadingStatus from 'components/LoadingStatus.vue'
import loading from '../../loading'

export default {
    components: {
        LoadingStatus,
        Pager
    },
    data () {
        return {
            query: '',
            list: [],
            page: 1,
            total: 1,
            loading: 1
        };
    },
    mounted () {
        this.refresh()
    },
    methods: {
        pageChange (page) {
            this.page = page;
            this.refresh();
        },
        refresh () {
            this.$datasource.get('list', {
                page: this.page,
                query: this.query
            }).then((data) => {
                this.loading = 0
                this.list = data.list
                this.page = data.page
                this.total = data.total
            });
        },
        doDel (row) {
            if (!confirm('确定删除么！')) {
                return;
            }
            this.$datasource.post('del', {id: row.id})
                .then((data) => {
                    this.list.splice(this.list.indexOf(row), 1)
                    loading.show('操作成功', 2000)
                }, (data) => {
                    loading.show(data.statusInfo || '操作失败', 2000)
                })
        }
    }
}
</script>
<style lang="stylus">
.list-view
    .table-list
        td
            >p
                margin-bottom: 0

</style>
