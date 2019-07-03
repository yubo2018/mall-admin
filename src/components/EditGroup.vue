<template>
<Modal
    v-model="visible"
    title="编辑分组"
    :styles="{top: '20px'}"
    @on-visible-change="handleChange">
    <Form ref="formValidate" :model="selfFormData" :rules="ruleValidate" :label-width="100">
        <FormItem label="级别" prop="specific">
            <RadioGroup v-model="selfFormData.specific">
                <Radio :label="1">一级</Radio>
                <Radio :label="2">二级</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="一级分组名称" prop="groupName" v-if="selfFormData.specific == 1">
            <Input v-model="selfFormData.groupName" placeholder="最多5个字或10个字符" ></Input>
        </FormItem>
        <template v-else>
            <FormItem label="上级分组" prop="parentId">
                <Select v-model="selfFormData.parentId" placeholder="请选择" class="tools" style="width:100px">
                    <Option :value="item.groupId|isString" v-for="(item, index) in groupList" :key="index">{{item.groupName}}</Option>
                </Select>
            </FormItem>
            <FormItem label="二级分组名称" prop="groupName">
                <Input v-model="selfFormData.groupName" placeholder="最多5个字或10个字符" ></Input>
            </FormItem>
            <FormItem label="二级分组图片" prop="groupImg">
                <Button type="default">上传图片</Button>
            </FormItem>
            <FormItem label="热门推荐">
                <RadioGroup v-model="selfFormData.isRecom">
                    <Radio :label="1">关闭</Radio>
                    <Radio :label="2">开启</Radio>
                </RadioGroup>
                <span class="des-tip">开启后将在微信端分类页置顶展示</span>
            </FormItem>
        </template>
    </Form>
    <div slot="footer">
        <Button type="text" size="large" @click="visible = false">取消</Button>
        <Button type="primary" size="large" :loading="loading" @click="handleSubmit">确定</Button>
    </div>
</Modal>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            default: {}
        },
        value: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            groupList:[{
                groupId: 1,
                groupName: '热卖'
            },{
                groupId: 2,
                groupName: '热卖1'
            }],
            visible: this.value,
            loading: false,
            selfFormData:{
                specific: 1,
                parentId: '',
                groupName:'',
                groupImg:'',
                isRecom: 1
            },
            ruleValidate:{
                groupName: [{ required: true, message: '必须填写', trigger: 'blur' } ],
                parentId: [{ required: true, message: '请选择上一级分组', trigger: 'change' } ]
            }
        }
    },
    methods: {
        handleChange(event){
            this.$emit('input', event)
        },
        handleSubmit(){
            this.$refs.formValidate.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$api.groupSave(this.selfFormData).then(res =>{
                        this.loading = false
                        this.visible = false
                        this.$Message.success(res.message);
                    }).catch((err) =>{
                        this.loading = false
                    })
                }
            })
        },
    },
    filters: {
        isString(val){
            return val.toString()
        }
    },
    watch: {
        value(val){
            if(val){
                this.visible = val
            }else{
                this.$refs.formValidate.resetFields()
            }
        }
    }
}
</script>
