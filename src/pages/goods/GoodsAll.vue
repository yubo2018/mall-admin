<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false">
        <h4 slot="title">全部商品</h4>
        <Row >
            <Col span="18">
                <Select v-model="model1" clearable placeholder="商品类型" class="tools" style="width:200px">
                    <Option value="0">商品类型</Option>
                    <Option value="1">食品</Option>
                    <Option value="2">美妆护肤</Option>
                    <Option value="3">服饰</Option>
                </Select>
                <Select v-model="model1" clearable placeholder="商品状态" class="tools" style="width:100px">
                    <Option value="1">上架中</Option>
                    <Option value="2">下架中</Option>
                    <Option value="3">已售罄</Option>
                </Select>
                <Select v-model="model1" clearable placeholder="商品活动" class="tools" style="width:100px">
                    <Option value="1">限时折扣</Option>
                    <Option value="2">秒杀</Option>
                    <Option value="3">拼团</Option>
                </Select>
                <Select v-model="model1" clearable placeholder="商品分组" class="tools" style="width:100px">
                    <Option value="1">热销排行</Option>
                    <Option value="2">新品上架</Option>
                </Select>
                <Select v-model="model1" clearable placeholder="商品标签" class="tools" style="width:100px">
                    <Option value="1">最新</Option>
                    <Option value="2">最热</Option>
                    <Option value="3">清仓</Option>
                    <Option value="4">特价</Option>
                </Select>
                <Button type="text" class="tools"> <Icon type="ios-refresh" size="18"/>刷新</Button>
                <Button type="text" class="tools">清空</Button>
    
            </Col>
            <Col span="6" style="display: flex;align-items: center;">
                <Select v-model="model1" class="tools" style="width:100px">
                    <Option value="1">商品名称</Option>
                    <Option value="2">商品编码</Option>
                    <Option value="4">SPU编码</Option>
                </Select>
                <Input search enter-button :placeholder="'请输入'+ model1" class="tools" style="margin-left:5px;min-width:200px" @on-search="getGoodsAll"/>
            </Col>
            <Col span="24">
                <Button type="primary" ghost to="/AddGoods" class="tools">新增商品</Button>
                <Button type="default" class="tools">批量上架</Button>
                <Button type="default" class="tools">批量下架</Button>
                <Button type="default" class="tools">修改分组</Button>
                <Button type="default" class="tools">删除商品</Button>
                <Button type="default" class="tools">导出</Button>
                <Select class="tools" style="width:150px">
                    <Option value="0">更多</Option>
                    <Option value="1">商品导入</Option>
                </Select>
           </Col>
        </Row>
        <Table  border :loading="loading" :columns="columns" :data="tableData">
            <template slot-scope="{ row }" slot="goodsName">
                <Row type="flex" justify="center" align="middle">
                    <Col :span="4">
                        <img src="https://image-c.weimobwmc.com/saas-wxbiz/c0e3eb90ef9242c08b0bd9c1b06759b6.png"
                            style="widthL36px;height:36px" 
                            :alt="row.goodsName">
                    </Col>
                    <Col :span="20">
                        <strong>{{ row.goodsName }}</strong>
                    </Col>
                </Row>
            </template>
            <template slot-scope="{ row }" slot="isSale">
                <Row type="flex" justify="center" align="middle">
                    <Col :span="12">
                        {{row.isSale == 1? '已上架' : '已下架'}}
                    </Col>
                    <Col :span="12">
                      <i-switch v-model="row.isSale"/>
                    </Col>
                </Row>
            </template>
        </Table>
        <!-- <footer>
            <Page :total="100" show-elevator size="small"/>
        </footer> -->
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
                        title: '商品名称',
                        slot: 'goodsName',
                        width: 300,
                    },
                    {
                        title: '价格',
                        key: 'marketPrice',
                    },
                    {
                        title: '总库存',
                        key: 'goodsStock',
                    },
                    {
                        title: '实际销量',
                        key: 'city',
                    },
                    {
                        title: '上下架时间',
                        key: 'saleTime',
                    },
                    {
                        title: '上架状态',
                        slot: 'isSale',
                        width: 140,
                    },
                    {
                        title: '排序',
                        key: 'zip',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 240,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '推广商品'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                tableData: []
            }
        },
        methods: {
            init(){
                this.getGoodsAll()
            },
            async getGoodsAll(){
                this.loading = true
                let data = await this.$api.goodsAll({});
                this.loading = false
                this.tableData = data.data
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
