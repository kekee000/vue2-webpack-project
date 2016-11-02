<template>
    <div class="app">
        <nav class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="/"><i class="icon icon-home"></i>xxx管理平台 <span></span></a>
        </div>

        <div v-if="user.role=='visitor'" class="navbar-links navbar-right nav-login">
            <a href="/login">登录</a>
            <a href="/reg">注册</a>
        </div>
        <div v-if="user.role!='visitor'" class="navbar-links navbar-right nav-login">
            <span style="color: #fff">
                <b>{{user.userName}}</b> ({{user.role}})
            </span>
            <a href="/loginout">注销</a>
        </div>
        </nav>
        <side-bar :cur="sidebar"></side-bar>
        <router-view class="viewport"></router-view>
    </div>
</template>

<script>
import SideBar from './views/SideBar.vue'
import user from './user'
export default {
    name: 'app',
    data () {
        return {
            user: user.get(),
            sidebar: ''
        }
    },
    mounted () {
    },
    components: {
        SideBar
    }
}
</script>
<style lang="stylus">
//@import './css/main.styl'
</style>
