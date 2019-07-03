<style lang="less">
.editor-left{
    // height: 100%;
}
.editor-left .model-btn{
    height: 80px;
    overflow: hidden;
}
.editor-left .model-btn button{
    height: 100%;
    width: 100%;
    padding: 0
}
.editor-left .model-btn button img{
    display: block;
    width: 50px;
    min-height: 29px;
    margin: 0 auto;
}
.editor-left .model-btn button>span{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0;
}
// .model-btn 
</style>
<template>
    <!--  -->
<section class="editor-left">
    <Tabs value="name1">
        <TabPane label="模块" name="name1">
            <Collapse :value="collapseValue">
                <Panel v-for="(item,index) in model" :key="index" :name="collapsePush(item.moduleGrouId)">
                    {{item.moduleGroupName}}
                    <Row slot="content" type="flex">
                        <Col span="6" class="model-btn" v-for="(item,index) in item.subModule" :key="index">
                            <Button type="text" @click="onBtn(item)">
                                <img :src="item.moduleIcom" alt="">
                                <span>{{item.moduleName}}</span>
                            </Button>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>

        </TabPane>
        <TabPane label="控件" name="name2">标签二的内容</TabPane>
        <TabPane label="页面" name="name3">标签三的内容</TabPane>
        <TabPane label="推广" name="name4">标签三的内容</TabPane>
    </Tabs>
</section>
</template>


<script>
import model from './db'
    export default {
        components:{
        },
        data () {
            return {
                collapseValue: ['1001','1002','1003'],
                model:model
            }
        },
        methods:{
            collapsePush(val){
                console.log(val)
                // this.collapseValue.push(val.toString())
                // console.log(this.collapseValue)
                
                return val.toString()
            },
            onBtn(item){
                this.$emit('editorRightVisible', item, function(res){
                    console.log(res)
                })
            }
        }
    }
</script>



