<template>
	<div class="banner ">
		<van-swipe :autoplay="3000" indicator-color="white" class="clear">
			<van-swipe-item v-for="(item,index) in bannerList" :key="index">
                <img :src="item.imageUrl" width="100%">
            </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
    props:{
        bannerList:Array
    },
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.banner{
    clear: both;
}
</style>
