<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false">
        <h4 slot="title">标签管理</h4>
        <Row >
            <Col span="20">
                <Button type="primary" ghost class="tools" @click="addTag">新增标签</Button>
                <Button type="default" class="tools" @click="delTag">批量删除</Button>
           </Col>
            <Col span="4" style="display: flex;align-items: center;">
                <Input search enter-button placeholder="请输入标签名称" class="tools" style="margin-left:5px;min-width:200px" @on-search="getGoodsAll"/>
            </Col>
        </Row>
        <Table @on-selection-change="selection" border :loading="loading" :columns="columns" :data="tableData"> </Table>
        <!-- <footer>
            <Page :total="100" show-elevator size="small"/>
        </footer> -->
        <Modal
            :title="showTagModalTitle"
            v-model="showTagModal"
            :styles="{top: '20px'}">
            <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="100">
                <FormItem label="标签名称" prop="name">
                    <Col span="20">
                        <Input v-model="formData.name" placeholder="最多5个字或10个字符" ></Input>
                    </Col>
                </FormItem>
            </Form>
        </Modal>
        <Modal v-model="delTagModal" width="360" :styles="{top: '20px'}">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除标签</span>
            </p>
            <div style="text-align:center">
                <p>删除后无法恢复，确认将这些标签删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="delTagModaLoading" @click="delTag">永久删除</Button>
            </div>
        </Modal>
    </Card>
</template>

<script>
    export default {
        data () {
            return {
                model1:'',
                loading:false,
                columns: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '标签名称',
                        width: 300,
                    },
                    {
                        title: '标签绑定商品数',
                        key: 'marketPrice',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 160,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                tableData: [],
                tableSelect:[],
                // 添加、编辑
                showTagModal: false,
                showTagModalTitle: '',
                formData: {},
                ruleValidate:{},
                // 删除
                delTagModal:false,
                delTagModaLoading: false
            }
        },
        methods: {
            init(){
                this.getGoodsAll()
            },
            getGoodsAll(){
                this.loading = true
                this.$api.goodsAll({},(res)=>{
                    this.tableData = res.data
                    this.loading = false
                    console.log(res)
                })
            },
            addTag(){
                this.showTagModal = true,
                this.showTagModalTitle = '新建标签'
            },
            delTag(){
                if(!this.tableSelect.length){
                    return this.$Message.error('请至少选择一个标签');
                }
                if(!this.delTagModal){
                    this.delTagModal = true
                }

            },
            selection(e){
                this.tableSelect = e
            }
        },
        created(){
            this.init()
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>
.tools{
    margin-bottom: 10px;
}
footer{

}
</style>
