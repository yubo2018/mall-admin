<template>
    <section class="editor-right">
            <Card shadow :bordered="false" dis-hover>
                <p slot="title">推荐模板</p>
                <Row :gutter="16">
                    <Col span="12" v-for="(item, index) in 2" :key="index">
                        <Card>
                            <div style="text-align:center">
                                <img src="https://wxmiimage.esharex.com/fengchao/assets/mb_jd194.png">
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card>
    </section>
</template>


<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>

<style lang="less" scoped>
.editor-right{
}
img{
    width: 100%;
}
</style>
