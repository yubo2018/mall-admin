<template>
<div>
    <Card :dis-hover="true" :shadow="false" :bordered="false" class="goods-add-item">
        <h3 class="title">基本信息</h3>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="200">
            <FormItem label="商品名称" prop="name">
                <Col span="10">
                    <Input v-model="formValidate.name" placeholder="请输入商品名称" ></Input>
                </Col>
            </FormItem>
            <FormItem label="商品类目" prop="mail">
                <Button type="default" class="tools">选择商品类目</Button>
            </FormItem>
            <FormItem label="商品分组" prop="city">
                <Select v-model="formValidate.city" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="商品图片">
                <Row>
                    <Col span="11">
                        <FormItem prop="date">
                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                        <FormItem prop="time">
                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                        </FormItem>
                    </Col>
                </Row>
                <div>尺寸建议750x750（正方形模式）或750×1000（长图模式）像素以上，大小2M以下，最多10张 (可拖拽图片调整显示顺序 )</div>
            </FormItem>
            <FormItem label="主图视频" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
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
                <Button type="default" class="tools">选择商品类目</Button>
            </FormItem>

            <FormItem label="商品规格" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">统一规格</Radio>
                    <Radio label="female">多规格</Radio>
                </RadioGroup>
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
export default {
    data(){
        return {
            formValidate:{},
            ruleValidate:{}
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


