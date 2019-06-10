<template>
    <Row :gutter="16" class="editor-content">
        <Col :span="6">
            <EditorLeft @editorRightVisible="editorRightVisible"></EditorLeft>
        </Col>
        <Col :span="10" style="background: #f5f7f9;">
            <EditorCenter></EditorCenter>
        </Col>
        <Col :span="8" style="height:100%;position: relative;">
            <Drawer v-model="visible" placement="right" :mask="false" inner :transfer="false" width="100%"  title="抽屉标题" :styles="styles" >
                <ModelA></ModelA>
            </Drawer>
            <EditorRight></EditorRight>
        </Col>
    </Row>
</template>

<script>
    import EditorLeft from './components/EditorLeft'
    import EditorCenter from './components/EditorCenter'
    import EditorRight from './components/EditorRight'
    import ModelA from './components/ModelA'
    
    export default {
        components:{
            EditorLeft,
            EditorCenter,
            EditorRight,
            ModelA
        },
        data () {
            return {
                value1: '1',
                visible:false,
                styles: {
                    height: 'calc(100% - 55px)',
                    paddingBottom: '53px',
                },
            }
        },
        methods:{
            editorRightVisible(val,callback){
                this.visible = val
                setTimeout(()=>{
                    this.visible = !this.visible
                    callback(!this.visible)
                },500)
            }
        }
    }
</script>


<style lang="less" scoped>
.editor-content{
    height: 100%;
}
</style>
