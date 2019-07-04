<template>
    <Modal
        v-model="visible"
        title="素材库"
        width="950px"
        class-name="vertical-center-modal"
        :loading="loading">
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
                                <Button type="primary">新建文件夹</Button>
                            </div>
                            <div style="margin-left:5px;">
                                <Button type="primary" ghost>裁剪上传</Button>
                            </div>
                            <div style="margin-left:5px;flex:1">
                                <Button type="default">批量上传</Button>
                            </div>
                            <div>
                                <Input search enter-button placeholder="请输入" style="margin-left:5px;min-width:200px" />
                            </div>
                        </div>
             
                        <Row :gutter="16" style="height:396px;margin:0px 0 0px 0px;padding:0;overflow-y: scroll;">
                            <Col :span="4" v-for="(item,index) in 100" :key="index" style="height:110px">{{item}}
                                <Input size="small" placeholder="default size" />
                            </Col>
                        </Row>
                    </div>
                    <div class="content-footer">
                        <Page :total="100" />
                    </div>
                </Col>
            </Row>
        <div slot="footer">
            <span >已选择 0 张,还可以选择 2 张</span>
            <Button type="text" size="large" @click="visible = false">取消</Button>
            <Button type="primary" size="large" :loading="loading">确定</Button>
        </div>
    </Modal>
</template>

<script>
    export default {
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
                activeName: '1'
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
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
                        justify-content: flex-end;
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
    }
</style>