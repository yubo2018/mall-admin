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
            <Button type="text" size="large" @click="visible = false">取消</Button>
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
            this.$refs.formValidate.validate(async (valid) => {
                if (valid) {
                    try {
                        let res = null
                        this.loading = true;
                        if(this.formData.tagId){
                            res = await this.$api.updateTag(this.formData)
                        }else{
                            res = await this.$api.addTag(this.formData)
                        }
                        this.visible = this.loading = false
                        this.$Message.success(res.message)
                        this.$emit('success', res)
                    } catch (err){
                        this.loading = false
                    }
                }
            })
        },
        handleChange(event){
            if(!event){
                this.$refs.formValidate.resetFields();
            }
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
