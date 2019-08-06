<template>
    <Card :dis-hover="true" :shadow="false" class="multi-goods-spec">
        <Row v-for="(item, index) in skuProps" :key="index">
            <Col :span="24" class="spec-group">
                <span>{{item.prop}}</span>
                <Button type="text" @click="removeSkuProps(index)">移除</Button>
            </Col>
            <Col :span="24" style="margin:5px 0 20px 0px">
                <div>
                    <Tag v-for="(item1, index1) in item.value" :key="index1" :name="item1.value"  type="dot" closable @on-close="handleClose(index, index1)">{{ item1.name }}</Tag>
                </div>
                <Poptip
                    placement="bottom-start"
                    v-model="item.isPoptipVisible">
                    <div slot="content" style="padding: 5px">
                        <Input v-model="item.propItemValue" enter-button placeholder="选择或输入规格">
                            <Button slot="append" @click="addSpecItem(index)">添加</Button>
                        </Input>
                        <!-- <div style="display: flex;flex-wrap: wrap;">
                            <Tag v-for="item in skuProps" :key="item" type="dot" closable @on-close="handleClose">{{ item.name }}</Tag>
                        </div> -->
                    </div>
                    <Button style="margin-top: 10px;">添加规格值</Button>
                </Poptip>
            </Col>
        </Row>
        <Input v-model="propName" v-if="isAddSkuProps" enter-button placeholder="选择或输入规格" style="max-width:250px">
            <Button slot="append" @click="addSkuProps">添加</Button>
        </Input>
        <Button type="primary" ghost @click="isAddSkuProps = true" v-else>添加规格</Button>
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
                <Table :columns="columns" :data="skuMap" border></Table>
            </Col>
        </Row>
    </Card>
</template>

<script>
export default {
    data () {
        return {
            isAddSkuProps: false,
            isPoptipVisible: false,
            propName: '',
            propItemValue: '',
            skuProps: [{
                prop: '颜色',
                id:'12',
                value:[{
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
                }]
            },{
                prop: '尺寸',
                id:'13',
                value:[{
                    name: '大', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                }]
            },{
                prop: '型号',
                id:'14',
                value:[{
                    name: 's', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                },{
                    name: 'x', // 规格值
                    value: '2', // 规格值ID
                    shopPrice: 0,// 销售价
                    marketPrice: "上午上学",// 市场价
                    costPrice: 1,// 成本价
                    goodsStock: 0,// 商品总库存
                    goodsWeight: 0,// 重量（Kg）
                    goodsVolume: 0// 体积（m³）
                }]
            }],
            skuMap:[],
            columns:[
                {
                    title: '规格图片',
                    align:'center',
                    width:90,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    align:'center',
                    width:93,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
                            return h('li',{}, [
                                h('Input',{
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        value: item.shopPrice
                                    }
                                })
                            ])
                        }))
                    }
                },
                {
                    title: '市场价(元)',
                    align:'center',
                    width: 100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    align:'center',
                    width: 100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
                    width:163,
                    align:'center',
                    fixed: 'right',
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, this.skuMap[params.index].list.map(item => {
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
        handleClose (i1, i2){
            this.skuProps[i1].value.splice(i2, 1)
            this.handleCalcSku()
        },
        addSkuProps (){
            if(!this.propName){
                return this.$Message.error('请输入规格！')
            }
            this.skuProps.push({
                prop: this.propName,
                isPoptipVisible: false,
                propItemValue:'',
                value: [],
            })
            this.propName = '';
            this.isAddSkuProps = false
            this.handleCalcSku()
        },
        addSpecItem (index){
            let prop = this.skuProps[index]
            if(!prop.propItemValue){
                return this.$Message.error('请输入规格值！')
            }
            if(JSON.stringify(prop.value).includes(prop.propItemValue)){
                return this.$Message.error(`${prop.propItemValue} 已存在！`)
            }
            prop.value.push({
                name: prop.propItemValue
            })
            prop.propItemValue = '';
            prop.isPoptipVisible = false
            this.handleCalcSku()
        },
        removeSkuProps(index){
            this.skuProps.splice(index, 1)
            this.handleCalcSku()
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
        },
        handleCalcSku () {
            let arr = []
            this.skuProps.forEach((item, index) =>{
                arr.push([])
                item.value.forEach(item1 =>{
                    arr[index].push(`${item.prop}=${item1.name}`)
                })
            })
            let newArr = arr.filter((item) => item.length)
            let calcSku= this.calcDescartes(newArr)
            let skuMap = calcSku[0].map((item0, index) =>{
                let spt = item0.split(`=`)
                let value = calcSku.map(item1 =>{
                        return item1[index]
                    })
                return {
                    prop: spt[0],
                    value: [...new Set(value)],
                    list: calcSku.map(item =>{
                        return {
                            shopPrice: "",// 销售价
                            marketPrice: "",// 市场价
                            costPrice: "",// 成本价
                            goodsStock: "",// 商品总库存
                            goodsWeight: "",// 重量（Kg）
                            goodsVolume: ""// 体积（m³）
                        }
                    })
                }
            })
            this.skuMap = skuMap
            this.mergeSkuTabel()

        },
        mergeSkuTabel(){
            this.skuMap.forEach(item =>{
                console.log()
                this.columns.unshift({
                    title: item.prop,
                    align:'center',
                    width:100,
                    render: (h, params) => {
                        return h('ul', {
                            class:'subCol'
                        }, item.value.map(item => {
                            return h('li',{}, [
                                h('text',{},item.split(`=`)[1])
                            ])
                        }))
                    }
                })
            })
        }
    },
    mounted(){
        this.handleCalcSku()
        
    }
}
//循环方式组合
function generateGroup(arr) {
    //初始化结果为第一个数组
    var result= new Array();
    //字符串形式填充数组
    for(var i=0;i<arr[0].length;i++){
        result.push(JSON.stringify(arr[0][i]));
    }
}
generateGroup([[{id:1,value:"红色"},{id:2,value:"蓝色"}],[{id:3,value:"XX"},{id:4,value:"XXS"}],[{id:5,value:"10m"},{id:6,value:"20m"}]]);
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
