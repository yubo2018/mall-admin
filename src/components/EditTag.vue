<template>
    <Modal
        v-model="visible"
        :title="title"
        :styles="{top: '20px'}"
        :loading="loading"
        @on-ok="handleSubmit"
        @on-cancel="handleCancel"
        @on-visible-change="handleChange">
        <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="100">
            <FormItem label="标签名称" prop="tagName" style="width:80%">
                <Input v-model="formData.tagName" placeholder="最多5个字或10个字符" ></Input>
            </FormItem>
        </Form>
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
            loading: true,
            formData: this.data,
            ruleValidate: {
                tagName: [{ required: true, message: '必须填写', trigger: 'blur' } ]
            }
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.formData)
            this.$refs.formValidate.validate((valid) => {
                if (valid) {
                    this.$api.tagEdit(this.formData,(res)=>{
                        this.visible = false
                        this.loading = false;
                    })
                }else{
                    this.loading = false;
                    this.$nextTick(() => {
                        this.loading = true;
                    });
                }
            })
        },
        handleCancel(){
            this.$refs.formValidate.resetFields();
        },
        handleChange(event){
            this.$nextTick(() => {
                this.loading = true;
            });
            this.$emit('input', event)
        }
    },
    watch: {
        value(val){
            this.visible = val
        }
    }
}
</script>
