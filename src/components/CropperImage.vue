<template>
    <Modal
        v-model="visible"
        title="裁剪"
         width="800px"
        @on-visible-change="handleChange"
        class-name="cropper-vertical-center-modal">
        <Row :gutter="16" style="height:100%">
            <Col :span="18" style="height:100%">
                <vue-cropper ref="cropper"
                    :img="option.img"
                    :output-size="option.size"
                    :output-type="option.outputType"
                    :info="true" 
                    :full="option.full" 
                    :can-move="option.canMove" 
                    :can-move-box="option.canMoveBox"
                    :fixed-box="option.fixedBox"
                    :original="option.original"
                    :auto-crop="option.autoCrop"
                    :auto-crop-width="option.autoCropWidth" 
                    :auto-crop-height="option.autoCropHeight"
                    :center-box="option.centerBox" 
                    :high="option.high"
                    @real-time="realTime" 
                    @img-load="imgLoad">
                </vue-cropper>
            </Col>
            <Col :span="6">
                <div :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
                    <img :src="previews.url" alt="" :style="previews.img">
                </div>
                <div>
                    <p>宽: {{previews.w}}</p>
                    <p>高: {{previews.h}}</p>
                </div>
            </Col>
        </Row>
        <div slot="footer">
            <div>

                <ButtonGroup shape="circle">
                    <Button type="default" >
                        <label for="uploads">选择图片</label>
                    </Button>
                    <Button type="default" >重新选择</Button>
                    <Button type="default" >重新选择</Button>
                    <Button type="default" >重新选择</Button>
                    <Button type="default" >重新选择</Button>
                </ButtonGroup>
                <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
                    accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
            </div>
            <Button type="text" size="large" @click="visible = false">取消</Button>
            <Button type="primary" size="large"  @click="handleSubmit">确定</Button>
        </div>
    </Modal>
</template>

<script>
    import { VueCropper } from 'vue-cropper'
    export default {
        name:"GoodsGroup",
        components:{
            VueCropper
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                visible: this.value,
                loading: false,

                crap: false,
                previews: {},
                option: {
                    img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG',
                    size: 1,
                    full: false,
                    outputType: 'png',
                    canMove: true,
                    fixedBox: false,
                    original: false,
                    canMoveBox: true,
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 200,
                    autoCropHeight: 150,
                    centerBox: false,
                    high: true
                },
            }
        },
        mounted () {
        },
        methods: {
            realTime(data){
                this.previews = data
                console.log(data)
            },
            imgLoad(){

            },
            uploadImg(e, num) {
                //上传图片
                var file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    return  this.$Message.error('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
                }
                this.$api.upload(file)
                var reader = new FileReader()
                reader.onload = (e) => {
                    let data

                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    this.option.img = data
                    
                }
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file)
                },
            handleChange(event){
                this.$emit('input', event)
            },
            handleSubmit(){
              
            }
        },
        watch: {
            value(val){
                this.visible = val
            }
        }
    }
</script>

<style lang="less">
    .cropper-vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
         .ivu-modal{
            top: 0;
            .ivu-modal-body{
                padding: 0 20px;
                height: 340px;
            }
            .ivu-modal-footer{
                div{
                    display: flex;
                    align-items: center;
                }
                div>div{
                    flex: 1;
                    text-align: left;
                }
            }
        }
    }
</style>