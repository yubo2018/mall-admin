<template>
    <Card :dis-hover="true" :shadow="false" class="multi-goods-spec">
        <Row v-for="(item, index) in specGroup" :key="index">
            <Col :span="24" class="spec-group">
                <span>{{item.name}}</span>
                <Button type="text" @click="removeSpecGroup(index)">移除</Button>
            </Col>
            <Col :span="24" style="margin:5px 0 20px 0px">
                <div>
                    <Tag v-for="item in item.specItem" :key="item" :name="item"  type="dot" closable @on-close="handleClose">{{ item }}</Tag>
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
            specGroup: [],
            reportList:[{
                "list": [{
                    "time_period_name": "上午上学",
                    "normal_amount": 0,
                    "be_late_amount": 1,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 0
                }, {
                    "time_period_name": "下午上学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 1
                }, {
                    "time_period_name": "下午放学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 1
                }, {
                    "time_period_name": "上午放学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 1,
                    "not_attendance_amount": 0
                }],
                    "grade_name": "幼儿园托儿班",
                    "class_name": "幼儿园托儿班2班",
                    "date": "2019-02-14",
                    "student_name": "刘小明"
                }],
                columns:[
                    {title:'年级',key:'grade_name',align:'center',width:110,},
                    {title:'班级',key:'class_name',align:'center',width:110,},
                    {title:'日期',key:'date',align:'center',width:110,},
                    {title:'姓名',key:'student_name',align:'center',width:110,},
                    {
                        title: '规格图片',
                        key: 'list',
                        align:'center',
                        width:100,
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
                        width:110,
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
                        width:110,
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
                        width:110,
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
                        width:110,
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
                        width:110,
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
                        width:110,
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
                        width:110,
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
        handleClose (){

        },
        addSpecGroup (){
            if(!this.specGroupName){
                return this.$Message.error('请输入规格！')
            }
            this.specGroup.push({
                name: this.specGroupName,
                isPoptipVisible: false,
                specItemName:'',
                specItem: [],
            })
            this.specGroupName = '';
            this.isAddSpecGroup = false
        },
        addSpecItem (index){
            let spec = this.specGroup[index]
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
        }
    },
    mounted(){
        console.log(123)
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
