<template>
    <Modal
        v-model="visible"
        :title="title"
        :styles="{top: '20px'}"
        @on-visible-change="handleChange">
        <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="100">
            <FormItem label="标签名称" prop="tagName" style="width:80%">
                <Input v-model="formData.tagName" placeholder="最多5个字或10个字符" ></Input>
            </FormItem>
        </Form>
        <div slot="footer">
            <Button type="text" size="large" @click="handleCancel">取消</Button>
            <Button type="primary" size="large" :loading="loading" @click="handleSubmit">确定</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: '新建标签'
        },
        value: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            visible: false,
            loading: false,
            formData: {},
            ruleValidate: {
                tagName: [{ required: true, message: '必须填写', trigger: 'blur' } ]
            }
        }
    },
    methods: {
        handleSubmit(){
            this.$refs.formValidate.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$api.tagEdit(this.formData).then((res) =>{
                        this.visible = this.loading = false
                        this.$refs.formValidate.resetFields();
                        this.$emit('saveTagOk', event)
                    }).catch((err) =>{
                        this.loading = false
                    })
                }
            })
        },
        handleCancel(){
            this.visible = false
            this.$refs.formValidate.resetFields();
        },
        handleChange(event){
            this.$emit('input', event)
        }
    },
    watch: {
        value(val){
            if(val){
                this.visible = val
                this.formData = this.data
            }
        }
    }
}
</script>
