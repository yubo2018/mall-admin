<template>
    <Row type="flex" justify="end" class="header">
        <Col span="20">微商城</Col>
        <Col span="4" class="">
            <div  class="log-out">
                <Icon type="ios-power-outline" size="28" @click="onLogout"/>
            </div>
        </Col>
    </Row>
</template>


<script>
export default {
    methods:{
        onLogout(){
            this.$router.push('login')
        }
    }
}
</script>


<style lang="less" scoped>
.header{
    height: 100%;
    line-height: 50px;
    .log-out{
        padding: 0 20px;
        text-align: right;
    }
}
</style>
