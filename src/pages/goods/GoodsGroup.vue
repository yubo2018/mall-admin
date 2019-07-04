<style>
    .group-content .ivu-collapse{
        background: transparent;
       border: none !important;
    }
    .group-content .ivu-collapse-item{
       margin: 10px 0;
       background: #ffffff;
       border-radius: 4px;
    }
    .group-content .ivu-collapse-header{
        height: 50px !important;
        border-bottom: 1px solid #ebebeb !important;
        display: flex;
        align-items: center;
    }
    .group-content .ivu-collapse-content > .ivu-collapse-content-box{
        padding: 0;
    }
    .group-content .ivu-collapse-content{
        padding: 0;
        margin-left: 30px;
    }
    .group-content .group-item{
        padding-left: 30px;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ebebeb !important;;
    }
    .group-content .group-item:nth-last-child(1){
        border: none !important;;
    }
</style>


<template>
   <Card :dis-hover="true" :shadow="false" :bordered="false" class="card-content group-content">
        <h4 slot="title">商品分组</h4>
        <Row >
            <Col span="20">
                <Button type="primary" ghost class="tools" @click="handleEditGroup()">新增一级分组</Button>
                <Button type="default" class="tools" @click="handleCollapseAll">{{collapseArr.length ? '折叠全部' : '展开全部'}}</Button>
           </Col>
        </Row>

        <Collapse simple :value="collapseArr" @on-change="handleCollapse">
            <Panel :name="index|string" v-for="(item, index) in tableData" :key="index">
                <span style="flex:1">{{item.groupName}}</span>
                <Button type="text"  @click.stop="handleEditGroup(item)">新增二级分组</Button>
                <Button type="text">编辑</Button>
                <Button type="text">删除</Button>
                <Row slot="content" >
                    <Col span="24" class="group-item" v-for="(item, index) in item.children" :key="index">
                        <span style="flex:1">{{item.groupName}}</span>
                        <Button type="text">编辑</Button>
                        <Button type="text">删除</Button>
                    </Col>
                </Row>
            </Panel>
        </Collapse>

        


        <EditGroup v-model="showGroupModal" :formData="formData"></EditGroup>

        <Modal v-model="delGroupModal" width="360" :styles="{top: '20px'}">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除标签</span>
            </p>
            <div style="text-align:center">
                <p>删除后无法恢复，确认将这些标签删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="delGroupModaLoading">永久删除</Button>
            </div>
        </Modal>
        <MaterialLibrary></MaterialLibrary>
    </Card>
</template>

<script>
import EditGroup from '@/components/EditGroup'
import MaterialLibrary from '@/components/MaterialLibrary'
    export default {
        components: {
            EditGroup,
            MaterialLibrary
        },
        data () {
            return {
                model1:'',
                loading:false,
                collapseArr:[],
                tableData: [{
                    groupName:"系统分组",
                    children:[{
                        groupName:"新品上架",
                    },{
                        groupName:"热销排行",
                    }]
                }],
                tableSelect:[],
                // 添加、编辑
                showGroupModal: false,
                formData: {},
                // 删除
                delGroupModal:false,
                delGroupModaLoading: false
            }
        },
        methods: {
            init(){
                this.getGoodsAll()
            },
            getGoodsAll(){
                this.loading = true
                // this.$api.goodsAll({},(res)=>{
                //     this.tableData = res.data
                //     this.loading = false
                //     console.log(res)
                // })
            },
            handleEditGroup(event){
                this.formData = event ? event : {}
                this.showGroupModal = true,
                this.showGroupModalTitle = '新建分组'
            },
            visibleChange(e){
                console.log(e)
                this.showGroupModal = e
            },
            handleCollapseAll(){
                // this.collapseArr.push(index)
                if(!this.collapseArr.length){
                    this.tableData.forEach((item,index) =>{
                        this.collapseArr.push(index)
                    })
                }else{
                    this.collapseArr = []
                }
            },
            handleCollapse(e){
    

            },
            handleCollapse1(){},
            selection(e){
                this.tableSelect = e
            }
        },
        created(){
            this.init()
        },
        mounted(){
        },
        filters:{
            string(val){
                return val.toString()
            }
        }
    }
</script>

<style lang="less" scoped>
.tools{
   
    // margin-bottom: 10px;
}

</style>
