<template>
    <Card :dis-hover="true" :shadow="false" :bordered="false">
        <h4 slot="title">新建商品</h4>
        <Steps :current="1">
            <Step title="已完成" content="商品基本信息"></Step>
            <Step title="进行中" content="商品详细信息"></Step>
            <Step title="待进行" content="其他信息"></Step>
        </Steps>
    </Card>
</template>
