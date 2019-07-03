<template>
    <Layout>
        <Sider :width="120" v-show="menuList.length">
            <Menu :active-name="activeName[1]" theme="light" width="auto" @on-select="to" >
                <MenuItem :name="index" v-for="(item,index) in menuList" :key="index" v-if="item.meta.navShow" >
                    <Icon type="ios-navigate"></Icon>
                    <span>{{item.meta.title}}</span>
                </MenuItem>
            </Menu>
            <div slot="trigger"></div>
        </Sider>
        <Layout>
            <Content>
                <!-- <transition > -->
                    <router-view></router-view>
                <!-- </transition> -->
            </Content>
            <!-- <Footer>
                <div class="footer-content">
                    <Page :total="100" show-elevator size="small"/>
                </div>
            </Footer> -->
        </Layout>
    </Layout>
</template>

<script>
export default {
    props:{
        activeName: {
            type: Array
        },
        menuList: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            transitionName:'fade'
        }
    },
    methods:{
        to(index){
            this.$router.push(this.menuList[index].path)
        }
    }
}
</script>


<style lang="less" scoped>
.ivu-layout{
    height: 100%;
    .ivu-layout-sider{
        padding: 10px;
        background: transparent;
        .ivu-menu{
            background: transparent;
            .ivu-menu-item{
                font-size: 12px;
                padding: 10px 12px;
            }
            &::after{
                width: 0;
            }
        }
    }
    .ivu-layout-content{
        // height: 100%;
        min-width: 1000px;
        border-radius: 4px 4px 0 0;
        margin: 10px 10px 0 10px;
        background: rgb(255, 255, 255);
        padding: 10px;
    }
    .ivu-layout-footer{
        background: #fff;
        margin: 0 10px;
        padding: 0!important;
        height: 60px;
        .footer-content{
            height: 100%;
            box-shadow: 0 2px 10px 0 rgba(15,12,70,.16);
            border-radius: 10px 10px 0 0;
        }
    }
}
</style>
