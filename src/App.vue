<template>
    <div id="app">
        <transition name="fade-enter" mode="out-in">
            <router-view/>
        </transition >
    </div>
</template>

<script>

export default {
    name: 'App',
    components:{

    },
}
</script>

<style>
html,body,#app{
    height: 100%;
    overflow: hidden;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.des-tip{
    font-size: 12px;
    color: #9797A1;
}
.card-content .ivu-card-body{
    background: #f2f2f6;
    border-radius: 4px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>
