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
        <modal-dialog title="登录平台" :show="loginDialog.show" :options="{skin: 'modal-login'}">
            <p>您还没有登录，请登录后进入平台。</p>
            <div slot="footer" class="gap-bottom gap-left">
                <button class="btn btn-dark"
                    @click="doLogin">登录</button>
                <a class="gap-left"href="https://passport.baidu.com/">注册</a>
            </div>
        </modal-dialog>
    </div>
</template>

<script>
import SideBar from './views/SideBar.vue'
import user from './user'
import ModalDialog from './components/ModalDialog.vue'

export default {
    components: {
        SideBar,
        ModalDialog
    },
    name: 'app',
    data () {
        return {
            user: user.get(),
            loginDialog: {
                show: user.get().role === 'visitor'
            },
            sidebar: ''
        }
    },
    methods: {
        doLogin () {
            window.location.href = this.loginUrl
        }
    }
}
</script>
<style lang="stylus">
//@import './css/main.styl'
</style>
