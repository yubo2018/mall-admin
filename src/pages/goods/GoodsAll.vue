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
                <Input search enter-button :placeholder="'请输入'+model1" class="tools" style="margin-left:5px;min-width:200px"/>
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
        <Table  border :columns="columns2" :data="data3"></Table>
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
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: 'Age',
                        key: 'age',
                    },
                    {
                        title: 'Province',
                        key: 'province',
                    },
                    {
                        title: 'City',
                        key: 'city',
                    },
                    {
                        title: 'Address',
                        key: 'address',
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
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
