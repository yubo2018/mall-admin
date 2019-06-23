<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false">
        <h4 slot="title">商品属性 - 新增商品属性</h4>
        <Row>
            <Col span="2">
                <Button type="primary" ghost to="/AddAttribute" class="tools" @click="addTag">新增属性</Button>
           </Col>
            <Col span="20">
                <span class="des-tip">商品属性将补充至商品信息中，商家需在编辑商品时选择对应的属性值，可用于手机端的筛选。最多支持10个属性。</span>
            </Col>
        </Row>
        <Table :loading="loading" :columns="columns" :data="tableData"> </Table>
        <!-- <footer>
            <Page :total="100" show-elevator size="small"/>
        </footer> -->
        <Modal v-model="delModal" width="360" :styles="{top: '20px'}">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除属性</span>
            </p>
            <div style="text-align:center">
                <p>删除后无法恢复，确认将这些属性删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="delModaLoading" @click="delAttribute">永久删除</Button>
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
                        title: '属性名称',
                    },
                    {
                        title: '筛选支持模块',
                    },
                    {
                        title: '排序',
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

                // 删除
                delModal:false,
                delModaLoading: false
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
            delAttribute(){
                if(!this.delModal){
                    this.delModal = true
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
