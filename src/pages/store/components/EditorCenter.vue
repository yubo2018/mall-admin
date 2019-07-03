<template>
    <section class="editor-center">
        <div class="editor">
            <div class="editor-header"></div>
            <div class="editor-center-main">
                <img src="../../../assets/bg-iphone-normal.png" alt="" class="editor-center-main-bg">
                <div class="iphone-main">
                    <div class="iphone-bang"></div>
                    <div class="iphone-title"></div>
                    <div class="iphone-body">
                        <vuedraggable v-model="list">
                            <div v-for="item in list" :key="item" class="item" :style="{background: bg1()}">
                            <p>{{item}}</p>
                            </div>
                        </vuedraggable>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer">
            <Button type="success" long>预览</Button>
            <br><br>
            <Button type="error" long>保存</Button>
        </div>
    </section>
</template>

<script>
    import vuedraggable from 'vuedraggable';
    
    export default {
        components:{
            vuedraggable
        },
        data () {
            return {
                list:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]
            }
        },
        methods: {
            handleChange ({ src, target, oldIndex, newIndex }) {
                this.handleList.push(`${src} => ${target}, ${oldIndex} => ${newIndex}`)
            },
            bg1(){
             return '#'+Math.floor(Math.random()*256).toString(10);
         }
        }
    }
</script>




<style lang="less" scoped>
.editor-center{
    position: relative;
    height: 100%;
    .editor{
        width: 80%;
        max-width: 375px;
        margin: 0 auto;
        .editor-header{
            height: 36px;
            margin-bottom: 16px;
        }
        .editor-center-main-bg{
            width: 100%;
        }
        .editor-center-main{
            position: relative;
            .iphone-main{
                background: #ffffff;
                position: absolute;
                left: 8.2%;
                right: 8%;
                top: 4%;
                bottom: 4.5%;
                border-radius: 30px;
                overflow: hidden;
                .iphone-bang{
                    height: 3.6%;
                    width: 60%;
                    margin: 0 auto;
                    background: #000000;
                    border-radius: 0 0 18px 18px;
                }
                .iphone-title {
                    background: #ffffff;
                    height: 6%;
                }
                .iphone-body{
                    height: calc(100% - 9.6%);
                    overflow-y: scroll;
                    &::-webkit-scrollbar {
                        width: 2px;
                        background: white;
                    }
                    &::-webkit-scrollbar-corner, /* 滚动条角落 */
                    &::-webkit-scrollbar-thumb,
                    &::-webkit-scrollbar-track {
                        border-radius: 4px;
                    }
                    &::-webkit-scrollbar-corner,
                    &::-webkit-scrollbar-track {
                        /* 滚动条轨道 */
                        background-color: rgba(180, 160, 120, 0.1);
                        box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
                    }
                    &::-webkit-scrollbar-thumb {
                        /* 滚动条手柄 */
                        background-color: rgba(180, 160, 120, 0.8);
                    }
                }
            }
        }
    }
    .footer{
        position: absolute;
        width: 100%;
        bottom: 0;
    }
}
.item{
    width: 50%;
    height: 100px;
    line-height: 100px;
    float: left;
    text-align: center;
}
</style>
