<template>
<div>
    <Card :dis-hover="true" :shadow="false" :bordered="false" class="goods-add-item">
        <h3 class="title">基本信息</h3>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="200">
            <!-- <FormItem label="商品名称" prop="name">
                <Col span="10">
                    <Input v-model="formValidate.name" placeholder="请输入商品名称" ></Input>
                </Col>
            </FormItem>
            <FormItem label="SPU编码" prop="name">
                <Col span="10">
                    <Input v-model="formValidate.name" placeholder="" ></Input>
                </Col>
            </FormItem>
            <FormItem label="商品类目" prop="mail">
                <Button type="default" @click="handleSelectCategory">选择商品类目</Button>
            </FormItem> -->

            <FormItem label="商品规格" prop="gender">
                <RadioGroup v-model="formValidate.Spec">
                    <Radio label="1">统一规格</Radio>
                    <Radio label="2">多规格</Radio>
                </RadioGroup>
            </FormItem>
            <template  v-if="formValidate.Spec == 2">
                <FormItem label="">
                    <GoodsSpec></GoodsSpec>
                </FormItem>
            </template>
            <template v-else>
                <FormItem label="商家编码" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="销售价" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="成本价" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="市场价" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="当前库存" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="重量（Kg）" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
                <FormItem label="体积（m³）" prop="name">
                    <Col span="10">
                        <Input v-model="formValidate.name" placeholder="" ></Input>
                    </Col>
                </FormItem>
            </template>
            <!-- <FormItem label="商品分组" prop="city">
                <Select v-model="formValidate.city" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem> -->
            <FormItem label="商品图片">
                <SelectImage v-model="src" text="添加图片" @selectImage="handleSelectImage"></SelectImage>
                <div>尺寸建议750x750（正方形模式）或750×1000（长图模式）像素以上，大小2M以下，最多10张 (可拖拽图片调整显示顺序 )</div>
            </FormItem>
            <FormItem label="主图视频" prop="gender">
                <SelectImage v-model="src" text="添加视频" @selectImage="handleSelectImage"></SelectImage>
            </FormItem>
        </Form>
    </Card>
    <Card :dis-hover="true" :shadow="false" :bordered="false" class="goods-add-item">
        <h3 class="title">配送/价格设置</h3>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="200">
            <FormItem label="配送方式" prop="name">
                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="运费设置" prop="mail">
                <Button type="default">选择商品类目</Button>
            </FormItem>



            <FormItem>
                <Button @click="handleReset('formValidate')"> 取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate')">下一步</Button>
            </FormItem>
        </Form>
    </Card>
</div>
</template>

<script>
import SelectImage from '@/components/SelectImage'
import GoodsSpec from './GoodsSpec'

export default {
    components:{
        SelectImage,
        GoodsSpec
    },
    data(){
        return {
            formValidate:{
                Spec: 2
            },
            ruleValidate:{},
            src:'https://cbu01.alicdn.com/img/ibank/2016/502/153/3154351205_696370628.400x400.jpg'
        }
    },
    methods: {
        handleSelectCategory (){
            this.$emit('on-select-category')
        },
        handleSelectImage (){

        }
    }
}
</script>
<style lang="less" scoped>
.title{
    padding-left: 16px;
}
</style>

<style>
.goods-add-item .ivu-tabs-nav{
    display: none;
}
.goods-add-item .ivu-card-body{
    background: #f2f2f6;
    border-radius: 4px;
    margin-bottom: 10px;
}
</style>


