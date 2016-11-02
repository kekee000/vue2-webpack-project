<template>
  <section v-if="role!='visitor'" class="sidebar">
    <router-link v-if="role=='admin'" :class="[cur == 'list' ? 'cur' : '']"
      :to="'/home/list'">用户列表</router-link>
    <router-link :class="[cur == 'profile' ? 'cur' : '']"
      :to="'/home/profile'">个人信息</router-link>
  </section>
</template>

<script>
import user from '../user'
export default {
  props: ['cur'],
  data: function () {
    return {
      role: user.get().role
    }
  }
}
</script>

<style lang="stylus">
@import '../css/def.styl'
.sidebar
  position: fixed
  top: $-nav-height
  left: 0
  bottom: 0
  width: $-side-width
  background: #fff
  a
    display: block
    line-height: 62px
    font-size: 16px
    color: #8b8d93
    box-sizing: border-box
    text-align: center
    &:hover
      color: $-base-color
      text-decoration: none
    &.cur
      color: $-base-color
      text-decoration: none
      border-left: 4px solid $-base-color
      background: $-bg-color
      text-indent: -4px

</style>
