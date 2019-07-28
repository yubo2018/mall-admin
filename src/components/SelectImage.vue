<template>
    <div class="select-image" @click.stop="selectImage">
        <img :src="value" alt="" v-if="value">
        <Icon type="md-add" :size="26" v-if="!value"/>
        <span v-if="!value">{{text}}</span>
        <Icon type="ios-close" :size="26" class="close" @click.stop="close" v-if="value"/>
    </div>
</template>

<script>
export default {
    props:{
        value: {
            type: String,
            default:''
        },
        text:{
            type: String,
            default:''
        }
    },
    methods: {
        selectImage (){
            console.log(123)
            this.$emit("selectImage")
        },
        close (){
            this.$emit("delImage")
        }
    }
}
</script>

<style lang="less" scoped>
.select-image{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    height: 120px;
    border: 1px dashed #E3E2E5;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    background: #ffffff;
    img{
        width: 99%;
        height: 99%;
        border-radius: 4px;
    }
    .close{
        position: absolute;
        right: 0px;
        top: 0;
        &:hover{
            color: red;
        }
    }
}
</style>
