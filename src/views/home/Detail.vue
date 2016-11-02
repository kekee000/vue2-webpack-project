<template>
    <div class="main-container detail-view">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group form-group-input">
                <p>真实姓名</p>
                <input v-model="fields.name" :disabled="disabled"
                    class="form-control">
            </div>
          </div>
          <div class="col-md-4 col-md-offset-1">
            <div class="form-group form-group-input">
                <p>身份证号</p>
                <input v-model="fields.idCard" :disabled="disabled"
                    class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group form-group-input">
                <p>性别</p>
                <select v-model="fields.sex" :disabled="disabled" class="form-control small-width">
                    <option>男</option><option>女</option>
                </select>
            </div>
          </div>
          <div class="col-md-4 col-md-offset-1">
            <div class="form-group form-group-input">
                <p>生日</p>
                <input v-model="fields.birthday" :disabled="disabled"
                    class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group form-group-input">
                <p>电话</p>
                <input v-model="fields.phone" :disabled="disabled"
                    class="form-control">
            </div>
            <div class="form-group form-group-input">
                <p>加盟时间</p>
                <input v-model="fields.joinTime" :disabled="disabled"
                    class="form-control">
            </div>
            <div class="form-group form-group-input">
                <p>所在城市</p>
                <input v-model="fields.city" :disabled="disabled"
                    class="form-control">
            </div>
          </div>
          <div class="col-md-4 col-md-offset-1">
            <div class="form-group form-group-input">
                <input v-model="fields.photo" :disabled="disabled"
                    class="form-control">
            </div>
          </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        var id = this.$route.query.id;
        return {
            action: '',
            disabled: true,
            fields: {
                id: id,
                name: '',
                idCard: '',
                sex: '男',
                birthday: '',
                phone: '',
                joinTime: '',
                city: '',
                photo: ''
            },
        }
    },
    mounted () {
        this.action = this.fields.id ? '修改' : '添加'
        if (this.fields.id) {
            this.load(this.fields.id)
        }
    },
    methods: {
        load (id) {
            this.$datasource.get('detail', {id: id})
                .then((data) => {
                    this.fields = data;
                })
        }
    }
}
</script>
<style lang="stylus">

</style>
