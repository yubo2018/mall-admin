<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false" class="card-content">
        <h4 slot="title">
            <router-link to="/GoodsAttribute">商品属性</router-link>  - 编辑商品属性
        </h4>
        <Form ref="ruleValidate" :model="formData" :rules="ruleValidate" :label-width="100">
            <FormItem label="属性名称" prop="attributeName">
                <Input v-model="formData.attributeName" :maxlength="10" placeholder="请输入属性名称" ></Input>
            </FormItem>
            <FormItem label="排序" prop="mail">
                <Col span="10">
                    <InputNumber :max="1000" :min="1" v-model="formData.sort"></InputNumber>
                </Col>
            </FormItem>
            <FormItem label="筛选支持模块" prop="city">
                <Col span="24">
                    <Col span="3">
                        <Checkbox v-model="formData.supportModule1">商品列表页筛选</Checkbox>
                    </Col>
                    <Col span="10" class="des-tip">
                    开启后，在商城全部商品列表可按该属性进行筛选，建议在商品信息中选择属性值后再开启
                    </Col>
                </Col>
                <Col span="24">
                    <Col span="3">
                        <Checkbox v-model="formData.supportModule2">分类页筛选</Checkbox>
                    </Col>
                    <Col span="10" class="des-tip">
                        开启后，在商城分类页面可按该属性进行筛选，建议在商品信息中选择属性值后再开启；显示区域有限，请控制属性值数量及字数
                    </Col>
                </Col>
            </FormItem>
            <FormItem label="属性值">
                <Col span="24">
                     <Col span="6">
                        <Input v-model="formData.attributeValue" placeholder="输入属性值" >
                            <Button type="default" slot="append" @click="appendTag">新增</Button>
                        </Input>
                        <span class="des-tip">拖拽可调整属性值顺序，保存生效</span>
                    </Col>
                </Col>
                <Col span="20" class="tag-box">
                    <vuedraggable class="wrapper" v-model="formData.attributeList">
                        <transition-group>
                            <Tag type="border" closable @on-close="handleTagClose" color="primary" v-for="(item, index) in formData.attributeList" :key="item" >{{item}}</Tag>
                        </transition-group>
                    </vuedraggable>
                </Col>
            </FormItem>
            <FormItem>
                <Button type="default" to="/GoodsAttribute">取消</Button>
                <Button type="primary" :loading="loading" @click="submit">
                    <span v-if="!loading">保存</span>
                    <span v-else>保存中...</span>
                </Button>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
import vuedraggable from 'vuedraggable';
export default {
    components:{
        vuedraggable
    },
    data(){
        return {
            loading: false,
            formData:{
                attributeName:'',
                sort: 100,
                supportModule1:false,
                supportModule2:false,
                attributeValue: '',
                attributeList:[]
            },
            ruleValidate:{
                attributeName: [
                    { required: true, message: '必须填写', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        appendTag(){
            if(!this.formData.attributeValue){
                return this.$Message.error('请输入属性值');
            }
            this.formData.attributeList.push(this.formData.attributeValue);
            this.formData.attributeValue = '';
        },
        handleTagClose(event, name){
            const index = this.formData.attributeList.indexOf(name);
            this.formData.attributeList.splice(index, 1);
        },
        submit(){
            this.$refs.ruleValidate.validate((valid) => {
                if (valid) {
                    if(!this.formData.attributeList.length){
                        return this.$Message.error('请至少新建一个属性值');
                    }
                    console.log(this.formData)
                    this.loading = true
                    setTimeout(()=>{
                        this.loading = false
                    },5000)
                }
            })
        }
    }
}
</script>


<style lang="less" scoped>
    .ivu-card-body{
        padding: 16px 0;
    }
    .tag-box{
        background: #ffffff;
        padding: 10px;
        border-radius: 4px;
        min-height: 52px;
    }
</style>
