<template>
    <Layout class="layout">
        <Sider width="120">
            <Menu :active-name="activeName[0]" theme="dark" width="auto" @on-select="to">
                <MenuItem :name="index" v-for="(item,index) in routes" :key="index" v-if="item.meta.navShow">
                    <Icon type="ios-navigate"></Icon>
                    <span>{{item.meta.title}}</span>
                </MenuItem>
            </Menu>
            <div slot="trigger"></div>
        </Sider>
        <Layout>
            <Header>
                <MyHeader/>
            </Header>
            <Content>
                <MenuRouter :menuList="menuRouterList" :activeName="activeName"/>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import MenuRouter from '@/components/MenuRouter'
    import MyHeader from '@/components/Header'
    export default {
        data () {
            return {
                menuRouterList: [],
                activeName:[0, 0]
            };
        },
        components:{
            MenuRouter,
            MyHeader
        },
        created(){
            console.log(13)
        },
        computed: {
            routes (){
                this.activeName = this.$route.meta.navActive.split("-").map(Number)
                let options = this.$router.options.routes
                let a1 = this.activeName[0]
                if(options[a1].children && options[a1].children.length >= 2 ){
                    this.menuRouterList = options[a1].children
                    return this.$router.options.routes
                }
                this.menuRouterList = []
                return this.$router.options.routes
               
            }
        },
        methods:{
            to(index){
                let options = this.$router.options.routes
                if(options[index].children && options[index].children.length >= 2){
                    this.$router.push(options[index].children[0].path)
                    return
                }
                this.$router.push(options[index].path)
            }
        }
    }
</script>

<style lang="less" scoped>
.layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .ivu-layout-header{
        padding: 0;
        height: 50px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .ivu-layout-content{
        overflow: hidden;
        height: 100%;
    }
}
</style>
