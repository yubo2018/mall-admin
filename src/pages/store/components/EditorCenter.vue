<template>
    <section class="editor-center">
        <!-- <div class="editor-center-header"></div> -->
        <div class="editor-center-main">
            <img src="" alt="" class="editor-center-main-bg">
            <div class="iphone-bang"></div>
            <div class="iphone-main">


                <vuedraggable class="wrapper" v-model="list">
                    <transition-group>
                        <div v-for="item in list" :key="item" class="item">
                        <p>{{item}}</p>
                        </div>
                    </transition-group>
                </vuedraggable>

            </div>
        </div>

        <Button type="success" long>预览</Button>
        <br><br>
        <Button type="error" long>保存</Button>
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
                list: [1,2,34,4,54,5]
            }
        },
        methods: {
            handleChange ({ src, target, oldIndex, newIndex }) {
            this.handleList.push(`${src} => ${target}, ${oldIndex} => ${newIndex}`)
            }
        },
    }
</script>




<style lang="less" scoped>
.editor-center-header{
    height: 36px;
    margin-bottom: 16px;
}
.editor-center-main{
    position: relative;
    max-width: 300px;
    min-height: 600px;
    background: url('../../../assets/bg-iphone-normal.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}
.editor-center-main-bg{
    width: 100%;
}
.iphone-main{
    position: absolute;
    left: 27px;
    top: 25px;
    right: 25px;
    bottom: 23px;
    border-radius: 30px;
    background: #ffffff;
}
.iphone-bang{
    position: absolute;
    top: 25px;
    left: 85px;
    width: 150px;
    height: 22px;
    border-radius: 0 0 20px 20px;
    z-index: 5;
    background: #000000;
}
</style>
