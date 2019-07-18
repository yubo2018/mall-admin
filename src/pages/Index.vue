<template>
    <Card style="width:320px">
        <div style="text-align:center">
           <input type="file" id="fileInput">
           <button @click="upload">上传</button>
        </div>
    </Card>
</template>

<script>
export default {
    methods:{
        upload(){
            const fileInput = document.getElementById("fileInput");
            this.$api.upload(fileInput.files[0])
        }
    }
}
</script>
