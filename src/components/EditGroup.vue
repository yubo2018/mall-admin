<template>
    <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="100">
        <FormItem label="级别" prop="name">
            <RadioGroup v-model="formData.disabledGroup">
                <Radio label="1">一级</Radio>
                <Radio label="2">二级</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="一级分组名称" prop="name" v-if="formData.disabledGroup == 1">
            <Input v-model="formData.name" placeholder="最多5个字或10个字符" ></Input>
        </FormItem>
        <template v-else>
            <FormItem label="上级分组" prop="name">
                <Select v-model="formData.model1" placeholder="请选择" class="tools" style="width:100px">
                    <Option value="1">限时折扣</Option>
                    <Option value="2">秒杀</Option>
                    <Option value="3">拼团</Option>
                </Select>
            </FormItem>
            <FormItem label="二级分组名称" prop="name">
                <Input v-model="formData.name" placeholder="最多5个字或10个字符" ></Input>
            </FormItem>
            <FormItem label="二级分组图片" prop="name">
                <Button type="default">上传图片</Button>
            </FormItem>
            <FormItem label="热门推荐" prop="name">
                <RadioGroup v-model="formData.disabledGroup1">
                    <Radio label="1">关闭</Radio>
                    <Radio label="2">开启</Radio>
                </RadioGroup>
                <span class="des-tip">开启后将在微信端分类页置顶展示</span>
            </FormItem>
        </template>
    </Form>
</template>

<script>
export default {
    props: {

        formData: {
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            ruleValidate:{}
        }
    },
    methods: {
        handleVisible(event){
            this.$emit('visible-change',event)
        }
    }
}
</script>
