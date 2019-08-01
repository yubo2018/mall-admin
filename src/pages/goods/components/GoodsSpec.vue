<template>
    <Card :dis-hover="true" :shadow="false" class="multi-goods-spec">
        <Row v-for="(item, index) in specList" :key="index">
            <Col :span="24" class="spec-group">
                <span>{{item.name}}</span>
                <Button type="text" @click="removeSpecGroup(index)">移除</Button>
            </Col>
            <Col :span="24" style="margin:5px 0 20px 0px">
                <div>
                    <Tag v-for="(item1, index1) in item.specItem" :key="index1" :name="item1.value"  type="dot" closable @on-close="handleClose">{{ item1.name }}</Tag>
                </div>
                <Poptip
                    placement="bottom-start"
                    v-model="item.isPoptipVisible">
                    <div slot="content" style="padding: 5px">
                        <Input v-model="item.specItemName" enter-button placeholder="选择或输入规格">
                            <Button slot="append" @click="addSpecItem(index)">添加</Button>
                        </Input>
                        <!-- <div style="display: flex;flex-wrap: wrap;">
                            <Tag v-for="item in specGroup" :key="item" type="dot" closable @on-close="handleClose">{{ item.name }}</Tag>
                        </div> -->
                    </div>
                    <Button style="margin-top: 10px;">添加规格值</Button>
                </Poptip>
            </Col>
        </Row>
        <Input v-model="specGroupName" v-if="isAddSpecGroup" enter-button placeholder="选择或输入规格" style="max-width:250px">
            <Button slot="append" @click="addSpecGroup">添加</Button>
        </Input>
        <Button type="primary" ghost @click="isAddSpecGroup = true" v-else>添加规格</Button>
        <div style="border: 1px dashed #E3E2E5;margin:20px 0px;"></div>
        <Row>
            <Col :span="12" :gutter="16">
                <Row type="flex" justify="start">
                    <Col :span="4" style="text-align:center;">批量设置</Col>
                    <Col :span="20">
                        <Row :gutter="16" type="flex" justify="start">
                            <Col :span="6">
                                <Input placeholder="商家编码" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="销售价" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="市场价" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="成本价" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="库存" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="重量" size="small"></Input>
                            </Col>
                            <Col :span="6">
                                <Input placeholder="体积" size="small"></Input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col :span="12">
                <Row type="flex" justify="end">
                    <Col span="3">
                        <Button type="primary">确定</Button>
                    </Col>
                </Row>
            </Col>
            <Col :span="24" style="margin-top: 30px;">
                <Table :columns="columns" :data="reportList" border></Table>
            </Col>
        </Row>
    </Card>
</template>

<script>
export default {
    data () {
        return {
            isAddSpecGroup: false,
            isPoptipVisible: false,
            specGroupName: '',
            specItemName: '',
            specList: [{
                name: '颜色',
                value: '0',
                specItem:[{
                    name: '绿色1', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                },{
                    name: '绿色2', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                },{
                    name: '绿色3', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                },{
                    name: '绿色4', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                }]
            },{
                name: '颜色',
                value: '0',
                specItem:[{
                    name: '绿色', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                }]
            },{
                name: '颜色',
                value: '0',
                specItem:[{
                    name: '绿色', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                }]
            }],
            reportList:[{
                "shopPrice": 0,
                "marketPrice": "上午上学",
                "costPrice": 1,
                "goodsStock": 0,
                "goodsWeight": 0,
                "goodsVolume": 0,
                "list": [{
                    "shopPrice": 0,
                    "marketPrice": "上午上学",
                    "costPrice": 1,
                    "goodsStock": 0,
                    "goodsWeight": 0,
                    "goodsVolume": 0
                }],
            }],
            columns:[
                {title:'年级',key:'grade_name',align:'center'},
                // {title:'班级',key:'class_name',align:'center',width:110,},
                // {title:'日期',key:'date',align:'center',width:110,},
                // {title:'姓名',key:'student_name',align:'center',width:110,},
                {
                    title: '规格图片',
                    key: 'list',
                    align:'center',
                    width:90,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('img',{
                                    attrs: {
                                        value: item.time_period_name
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '销售价(元)',
                    key: 'list',
                    align:'center',
                    width:93,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '市场价(元)',
                    key: 'list',
                    align:'center',
                    width: 100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '成本价(元)',
                    key: 'list',
                    align:'center',
                    width: 100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '库存',
                    key: 'list',
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '重量(kg)',
                    key: 'list',
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '体积(m³)',
                    key: 'list',
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    attrs: {
                                        value: item.time_period_name
                                    },
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                })
                            ])
                        }))
                    }
                },   
                {
                    title: '操作',
                    key: 'list',
                    width:163,
                    align:'center',
                    fixed: 'right',
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.reportList[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Button',{
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                },'清空'),
                                h('Button',{
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                    }
                                },'禁用'),
                                h('Button',{
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                },'批量填充')
                            ])
                        }))
                    }
                },
            ]
        }
    },
    methods: {
        handleAdd (index){
            this.specGroup[index].specItem.push("123123")
        },
        handleClose (){},
        addSpecGroup (){
            if(!this.specGroupName){
                return this.$Message.error('请输入规格！')
            }
            this.specList.push({
                name: this.specGroupName,
                isPoptipVisible: false,
                specItemName:'',
                specItem: [],
            })
            this.specGroupName = '';
            this.isAddSpecGroup = false
        },
        addSpecItem (index){
            let spec = this.specList[index]
            if(!spec.specItemName){
                return this.$Message.error('请输入规格值！')
            }
            if(spec.specItem.includes(spec.specItemName)){
                return this.$Message.error(`${spec.specItemName} 已存在！`)
            }
            spec.specItem.push(spec.specItemName)
            spec.specItemName = '';
            spec.isPoptipVisible = false
        },
        removeSpecGroup(index){
            this.specGroup.splice(index, 1)
        },
        calcDescartes (array){
            if (array.length < 2) return array[0] || [];
            return [].reduce.call(array, function (col, set) {
                var res = [];
                col.forEach(function (c) {
                    set.forEach(function (s) {
                        var t = [].concat(Array.isArray(c) ? c : [c]);
                        t.push(s);
                        res.push(t);
                    })
                });
                return res;
            });
        }
    },
    mounted(){
        let calcSpec = []
        for(let i = 0; i < this.specList.length; i++){
            calcSpec.push([this.specList[i].specItem])
        }
        var arr = [
                ['黑色', '白色','白色', '蓝色'], 
                ['黑色', '白色', '蓝色'], 
                ['1.2KG', '2.0KG', '3.0KG']
            ]
        let calc = this.calcDescartes(arr)
        console.log(calc)
    }
}
</script>

<style lang="less">
.multi-goods-spec .ivu-card-body{
    background: #ffffff;
    padding: 10px;
    .spec-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        background: #f2f2f6;
        line-height: 50px;
        border-radius: 4px;
        padding: 0 10px;
        overflow: hidden;
    }
}
.subCol>li{
      margin:0 -18px;
      list-style:none;
      text-Align: center;
      padding: 9px;
      border-bottom:1px solid #ccc;
      overflow-x: hidden;
}
.subCol>li:last-child{
  border-bottom: none
}

</style>
