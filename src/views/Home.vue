<template>
    <div class="vue-home">
        <p>vue主页</p>
        <ul>
            <li><router-link :to="'/home/list'" :class="'link'" v-log.link="{act:'view1'}">/home/view1</router-link></li>
            <li><router-link :to="'/home/profile'" v-log.tab="{act:'view2'}">/home/view2</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
<style lang="stylus">
.vue-home
    font-size: 16px
    color: blue
</style>
