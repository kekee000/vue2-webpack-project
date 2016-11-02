<template>
    <div class="main-container detail-view">
        <p>用户名：{{user.userName}}</p>
        <p>角  色：{{user.role}}</p>
    </div>
</template>

<script>
import user from '../../user'
export default {
    data () {
        return {
            user: user.get()
        }
    },
    mounted() {
        console.log('view1')
    }
}
</script>
