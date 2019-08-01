<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false" class="goods-add-content">
        <h4 slot="title">新建商品</h4>
        <Steps :current="0">
            <Step title="进行中" content="商品基本信息"></Step>
            <Step title="进行中" content="商品详细信息"> </Step>
            <Step title="待进行" content="其他信息"></Step>
        </Steps>
        <Tabs value="name1" class="tabs-nav-container">
            <TabPane name="name1">
                <AddGoods1 @on-select-category="isSelectCategory = true"/>
            </TabPane>
            <TabPane name="name2">
                <AddGoods2/>
            </TabPane>
            <TabPane name="name3">
                <AddGoods3/>
            </TabPane>
        </Tabs>
        <SelectCategory v-model="isSelectCategory" @on-ok="handleSelectChange"></SelectCategory>
        <!-- <MaterialLibrary v-model="isSelectImage"></MaterialLibrary> -->
    </Card>
</template>

<script>
import AddGoods1 from './components/AddGoods1'
import AddGoods2 from './components/AddGoods2'
import AddGoods3 from './components/AddGoods3'
import SelectCategory from '@/components/SelectCategory'
import MaterialLibrary from '@/components/MaterialLibrary'
export default {
    components:{
        AddGoods1,
        AddGoods2,
        AddGoods3,
        SelectCategory,
        MaterialLibrary
    },
    data(){
        return {
            // 选择类目
            isSelectCategory: false,
            isSelectImage: false,
            formValidate:{},
            ruleValidate:{}
        }
    },
    methods: {
        handleSelectCategory () {
            this.isSelectCategory = true
        },
        handleSelectChange (val) {
            this.isSelectImage = true
            console.log(val)
        }
    }
}
</script>


<style lang="less" scoped>
    .ivu-card-body{
        padding: 16px 0;
    }
</style>
<style>
.goods-add-content .ivu-form{
    margin-right: 10px;
}
.tabs-nav-container .ivu-tabs-bar{
    display: none;
}
.goods-add-content .ivu-card-body{
    padding: 16px 0;
}
.ivu-steps{
    margin-top: 20px;
    margin-bottom: 35px;
    margin-left: 100px;
}
</style>
