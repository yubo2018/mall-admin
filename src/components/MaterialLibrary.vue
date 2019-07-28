<template>
    <Modal
        v-model="visible"
        title="素材库"
        width="950px"
        class-name="vertical-center-modal">
        <Row>
            <Col :span="4" >
                <Menu width="100%" :active-name="activeName " style="height:100%">
                    <MenuItem name="1">我的文件</MenuItem>
                    <MenuItem name="3">图片库</MenuItem>
                    <!-- <MenuItem name="2">我的视频</MenuItem> -->
                </Menu>
            </Col>
            <Col :span="20" class="content">
                <div class="content-body">
                    <div class="tools">
                        <div>
                            <Button type="primary" @click="handleAddFile">新建文件夹</Button>
                        </div>
                        <div style="margin-left:5px;">
                            <Button type="primary" ghost @click="handleUpload(1)">裁剪上传</Button>
                        </div>
                        <div style="margin-left:5px;flex:1">
                            <Button type="default" @click="handleUpload(2)">批量上传</Button>
                        </div>
                        <div>
                            <Input search enter-button placeholder="请输入" style="margin-left:5px;min-width:200px" />
                        </div>
                    </div>
                    <Breadcrumb style="padding:0 20px">
                        <BreadcrumbItem v-for="(item ,index) in hierarchy" :key="index" @click="handleOpenFile">{{item.label}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Row style="height:375px;margin:0px 10px;padding:0;overflow-y: scroll;">
                        <vuedraggable v-model="tabelData">
                            <Col :span="4" v-for="(item,index) in tabelData" :key="index" class="item" :style="{background: status || item.userSelected ?'#f1f5fa':''}">
                                <Icon type="ios-checkmark-circle" v-if="status" class="checkmark" :color="item.adminSelected ? '#a33991':''"  @click="handleAdminSelected(item, index)"/>
                                <Icon type="ios-checkmark-circle" class="checkSelected" :class="item.userSelected ? 'userCheck':''" v-if="!status && item.fileType == 2"  @click="handleUserSelected(item, index)"/>
                                <div v-if="item.fileType == 1" @dblclick="handleOpenFile(item, index)">
                                <div style="height:100px">
                                        <Icon type="ios-folder-open" :size="80" color="rgb(255,232,148)" v-if="item.children.length"/>
                                        <Icon type="md-folder" :size="80" color="rgb(255,232,148)" v-else/>
                                </div>
                                    <input type="text" :value="item.fileName">
                                </div>
                                <div v-if="item.fileType == 2">
                                    <div class="image" style="height:100px" :style="{ 'background-image':'url('+ item.url +')'}"></div>
                                    <input type="text" :value="item.fileName">
                                </div>
                                <div v-if="item.fileType == 3">
                                    <Icon type="md-folder" :size="100" color="rgb(255,232,148)"/>
                                    <input type="text">
                                </div>
                            </Col>
                            <Spin size="large" fix v-if="loading"></Spin>
                        </vuedraggable>
                    </Row>
                </div>
                <div class="content-footer">
                    <div>
                        <ButtonGroup shape="circle">
                            <Button type="default" @click="handleAdmin">{{status ? '取消': '管理'}}</Button>
                            <Button type="default" v-if="status" @click="handleDel">删除</Button>
                        </ButtonGroup>
                        <Checkbox v-model="isCheckAll" :indeterminate="isCheckAllStyle" @on-change="handleCheckAll" v-if="status" style="margin-left:20px">{{delArr.length ? `已选中${delArr.length}个文件/文件夹` : '全选'}}</Checkbox>
                    </div>
                    <Page :total="100" />
                </div>
            </Col>
        </Row>
        <div slot="footer">
            <span >已选择 {{slectedArr.length}} 张,还可以选择 {{limit - slectedArr.length}} 张</span>
            <Button type="text" size="large" @click="visible = false">取消</Button>
            <Button type="primary" size="large" :disabled="status" @click="handleSubmit">确定</Button>
        </div>

        <Modal v-model="isDelFile" width="360" :styles="{top: '20px'}">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除文件/文件夹</span>
            </p>
            <div style="text-align:center">
                <p>删除后无法恢复，确认将这些文件/文件夹删除？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long >永久删除</Button>
            </div>
        </Modal>
        <CropperImage v-model="isCropperImage" ref="cropper"></CropperImage>
    </Modal>
</template>

<script>
    import vuedraggable from 'vuedraggable';
    import CropperImage from './CropperImage';
    export default {
        components:{
            vuedraggable,
            CropperImage
        },
        props: {
            value: {
                type: Boolean,
                default: true
            },
        },
        data () {
            return {
                visible: this.value,
                
                loading: false,
                activeName: '1',
                hierarchy: [{
                    value: 0,
                    label:'全部文件'
                }],
                tabelData:[{
                    fileId: 11,
                    fileType: 1,
                    fileFormat: 'file',
                    fileName:'新建文件夹',
                    url:'',
                    children: [{
                        fileId: 12,
                        fileType: 2,
                        fileFormat: 'jpg',
                        fileName:'000107',
                        url:'//2.ss.faisys.com/image/materialLib/illustration/000107.jpg',
                    },{
                        fileId: 12,
                        fileType: 2,
                        fileFormat: 'jpg',
                        fileName:'000107',
                        url:'//2.ss.faisys.com/image/materialLib/illustration/000107.jpg',
                    },{
                        fileId: 12,
                        fileType: 2,
                        fileFormat: 'jpg',
                        fileName:'000107',
                        url:'//2.ss.faisys.com/image/materialLib/illustration/000107.jpg',
                    }]
                }],
                // 管理
                status: false,
                isDelFile:false,
                isCheckAll: false,
                isCheckAllStyle: false,
                delArr:[],
                // 用户选中
                slectedArr:[],
                limit: 1,

                // 裁剪
                isCropperImage: false
            }
        },
        methods: {
            show (){
                this.visible = true
            },
            handleInitData(){
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            },
            handleAddFile(){
                let newFile = {
                        fileId: 11,
                        fileType: 1,
                        fileFormat: 'png',
                        fileName:'新建文件夹',
                        url:'',
                        children:[]
                    }
                this.tabelData.unshift(newFile)
            },
            handleOpenFile(item, index){
                this.hierarchy.push({
                    value: 0,
                    label:item.fileName
                })
                this.tabelData = item.children || []
            },
            handleUpload(e){
                if(e == 1){
                    this.isCropperImage = true
                } else {

                }
            },
            handleUserSelected(item ,index){
                let isFlag = !Boolean(this.tabelData[index].userSelected)
                if(isFlag){
                    if(this.slectedArr.length >= this.limit){
                        return  this.$Message.error('当前要要添加的图片已达到上限');
                    }
                    this.slectedArr = Array.from(new Set(this.slectedArr.concat([index])))
                } else {
                    this.slectedArr.splice(this.slectedArr.findIndex(n => n == index), 1) 
                }
                this.isCheckAllStyle = this.slectedArr.length != this.tabelData.length
                this.isCheckAll = this.slectedArr.length == this.tabelData.length
                this.$set(this.tabelData[index], 'userSelected', isFlag)
            },
            handleAdmin(){
                this.status = !this.status
            },
            handleAdminSelected(item ,index){
                let isFlag = !Boolean(this.tabelData[index].adminSelected)
                if(isFlag){
                    this.delArr = Array.from(new Set(this.delArr.concat([index])))
                } else {
                    this.delArr.splice(this.delArr.findIndex(n => n == index), 1) 
                }
                this.isCheckAllStyle = this.delArr.length != this.tabelData.length
                this.isCheckAll = this.delArr.length == this.tabelData.length
                this.$set(this.tabelData[index], 'adminSelected', isFlag)
            },
            handleCheckAll(event){
                this.tabelData.forEach((item, index) =>{
                    if(event){
                        this.delArr.push(index)
                    }else{
                        this.delArr = []
                    }
                    this.$set(this.tabelData[index], 'adminSelected', event)
                })
                this.isCheckAllStyle = false
            },
            handleDel(){
                if(!this.delArr.length){
                    return this.$Message.error('请选择要删除的文件/文件夹');
                }
                this.isDelFile = true
            },
            handleSubmit(){
                if(!this.slectedArr.length){
                    return this.$Message.error('请选择要添加的图片');
                } 
                console.log(this.slectedArr)
            }
        },
        mounted (){
            this.handleInitData()
        }
    }
</script>

<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
            .ivu-modal-body{
                padding: 0;
            }
            .ivu-modal-body>.ivu-row{
                height:500px;
                .content{
                    display: flex;
                    flex-direction: column;
                    .content-body{
                        flex: 1;
                        .tools{
                            padding: 10px 20px;
                            display: flex;
                            align-items: center;
                        }
                        .ivu-row{
                            padding: 10px 20px;
                        }
                    }
                    .content-footer{
                        padding: 10px 20px;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
            .ivu-modal-body>.ivu-row>.ivu-col{
                height: 100%;
            }
            .ivu-modal-footer{
                div{
                    display: flex;
                    align-items: center;
                }
                div>span{
                    flex: 1;
                    text-align: left;
                    color: #bbb;
                }
            }
        }
        .item{
            height: 120px;
            margin: 0 10px 10px 10px;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            .checkmark{
                left: 2px;
                top: 2px;
                position: absolute;
                font-size: 24px;
            }
            .checkSelected{
                left: 2px;
                top: 2px;
                display: none;
                position: absolute;
                font-size: 24px;
            }
            .userCheck{
                display: block;
                color: #a33991
            }
            div{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            div>.image{
                width: 100%;
                vertical-align: middle;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                transition: all .3s ease;
            }
            div>input{
                max-width: 100px;
                height: 20px;
                display: inline-block;
                border: none;
                text-align: center;
                background: transparent;
                &:focus{
                    text-align: left;
                }
            }
            &:hover{
                background: #f1f5fa;
                .checkSelected{
                    display: block;
                }
            }
        }
    }
</style>