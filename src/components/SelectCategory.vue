<template>
        <Modal
        v-model="visible"
        :title="title"
        @on-visible-change="handleChange">
        <Row>
            <Col span="24">
                <div class="category-value-view">您当前选择的是：{{combCategory}}</div>
            </Col>
            <Col span="11">
                <Scroll class="scroll-view">
                    <div class="category-view">
                        <Input search enter-button style="margin: 15px 0;"/>
                        <div>
                            <RadioGroup v-model="category1" vertical @on-change="handleChange1">
                                <Radio v-for="(item, index) in list3" :key="index" :label="item.categoryId +'_'+ item.title">{{ item.title }}</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </Scroll>
            </Col>
            <Col span="11" offset="2">
                <Scroll class="scroll-view">
                    <div class="category-view">
                        <Input search enter-button style="margin: 15px 0;"/>
                        <div>
                            <RadioGroup v-model="category2" vertical @on-change="handleChange2">
                                <Radio v-for="(item, index) in list3" :key="index" :label="item.categoryId +'_'+ item.title">{{ item.title }}</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </Scroll>
            </Col>
        </Row>
        <div slot="footer">
            <Button type="text" size="large" @click="visible = false">取消</Button>
            <Button type="primary" size="large" :loading="btnLloading" @click="handleSubmit">确定</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    props:{
        value: {
            type: Boolean,
            default: false
        },
    },
    data () {
        return {
            visible: false,
            title: "商品类目",
            btnLloading: false,
            category1: '',
            category2: '',
            combCategory: '',
            list3: [{
                    "categoryId": 1,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "食品"
                }, {
                    "categoryId": 2,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "美妆护肤"
                }, {
                    "categoryId": 3,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "服饰"
                }, {
                    "categoryId": 4,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "鞋类箱包"
                }, {
                    "categoryId": 5,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "母婴"
                }, {
                    "categoryId": 6,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "居家日用"
                }, {
                    "categoryId": 7,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "珠宝配饰"
                }, {
                    "categoryId": 8,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "3C数码"
                }, {
                    "categoryId": 9,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "家用电器"
                }, {
                    "categoryId": 10,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "图书音像"
                }, {
                    "categoryId": 11,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "医疗保健"
                }, {
                    "categoryId": 12,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "古董收藏"
                }, {
                    "categoryId": 13,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "休闲娱乐"
                }, {
                    "categoryId": 14,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "餐饮美食"
                }, {
                    "categoryId": 15,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "丽人"
                }, {
                    "categoryId": 16,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "旅游酒店"
                }, {
                    "categoryId": 17,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "汽车/交通"
                }, {
                    "categoryId": 18,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "商务办公"
                }, {
                    "categoryId": 19,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "便民生活"
                }, {
                    "categoryId": 20,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "文化体育"
                }, {
                    "categoryId": 21,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "学习培训"
                }, {
                    "categoryId": 22,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "房地产"
                }, {
                    "categoryId": 23,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "金融理财"
                }, {
                    "categoryId": 24,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "网络游戏"
                }, {
                    "categoryId": 25,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "话费通信"
                }, {
                    "categoryId": 26,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "工农用品"
                }, {
                    "categoryId": 27,
                    "childrenCategoryList": null,
                    "enableCustom": 1,
                    "isLeaf": 0,
                    "title": "其他"
                }],
                "usedCategoryList": [{
                    "categoryIdList": [2, 37],
                    "categoryTreeTitle": ["美妆护肤", "彩妆/香水/美妆工具"],
                    "usedCategoryId": 21833
                }, {
                    "categoryIdList": [4, 51],
                    "categoryTreeTitle": ["鞋类箱包", "精品男包"],
                    "usedCategoryId": 20551
                }]
        }
    },
    methods: {
        handleChange(event){
            this.$emit('input', event)
        },
        handleSubmit () {
            if(!this.category1){
                return this.$Message.error('请选择一级类目');
            }
            if(!this.category2){
                return this.$Message.error('请选择二级类目');
            }
            this.$emit('input', false);
            this.$emit("on-ok", [this.category1, this.category2])
        },
        handleChange1 (val){
            this.category2 = "";
            this.combCategory = val.split('_')[1]
        },
        handleChange2 (val){
            if(!this.category1){
                return
            }
            this.combCategory = this.category1.split('_')[1] + ' > ' + val.split('_')[1]
        }
    },
    watch: {
        value (val) {
            this.visible = val;
        },
    }
}
</script>

<style lang="less">
    .category-value-view{
        height: 30px;
        line-height: 30px;
        margin-bottom: 15px;
    }
    .scroll-view .ivu-scroll-container{
        padding: 0 15px;
        border: 1px solid #e0e0e0;
        .ivu-radio-group{
            width: 100%;
        }
        label{
            height: 32px;
            line-height: 32px;
            padding-left:8px; 
            &:nth-of-type(odd){ 
                background:#f2f2f6;
            }
        }
    }
</style>
