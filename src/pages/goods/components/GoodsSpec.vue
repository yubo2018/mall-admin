<template>
    <Card :dis-hover="true" :shadow="false" class="multi-goods-spec">
        <Row v-for="(item, index) in specGroup" :key="index">
            <Col :span="24" class="spec-group">
                <span>{{item.name}}</span>
                <Button type="text">移除</Button>
            </Col>
            <Col :span="24" style="margin:5px 0 20px 0px">
                <Tag v-for="item in item.specItem" :key="item" :name="item"  type="dot" closable @on-close="handleClose">{{ item }}</Tag>
                <br/>
                <Poptip
                    placement="bottom-start">
                    <div slot="content" style="padding: 5px">
                        <Input search enter-button placeholder="选择或输入规格">
                            <Button slot="append">新增</Button>
                        </Input>
                        <div style="display: flex;flex-wrap: wrap;">
                            <Tag v-for="item in specGroup" :key="item" type="dot" closable @on-close="handleClose">{{ item.name }}</Tag>
                        </div>
                    </div>
                    <Button type="primary" ghost style="margin-top: 10px;">添加规格值</Button>
                </Poptip>
            </Col>
        </Row>
        <Button type="primary" ghost>添加规格</Button>
        <div style="border: 1px dashed #E3E2E5;margin:20px 0px;"></div>
    </Card>
</template>

<script>
export default {
    data () {
        return {
            specGroup: [{
                name:'颜色',
                specItem: ["红褐色", "绿色"],
            }, {
                name:'尺寸',
                specItem: ["大","中","小"],
            }]
        }
    },
    methods: {
        handleAdd (index){
            this.specGroup[index].specItem.push("123123")
        },
        handleClose (){

        }
    },
    mounted(){
        console.log(123)
    }
}
</script>

<style lang="less">
.multi-goods-spec .ivu-card-body{
    background: #ffffff;
    padding: 10px;
    .spec-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        background: #f2f2f6;
        line-height: 50px;
        border-radius: 4px;
        padding: 0 10px;
        overflow: hidden;
    }
}

</style>
