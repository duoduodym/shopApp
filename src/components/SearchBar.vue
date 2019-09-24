<template>
	<div class="search-bar">
		<van-row>
			<van-col span="4" class="tc">
				<span class="iconfont icon-dingwei fc-f position"></span>
			</van-col>
			<van-col span="16" class="search-box">
				<input type="text" class="search-input fc-f" placeholder="输入关键字搜索商品" />
			</van-col>
			<van-col span="4" class="fc-f tc search-btn">搜索</van-col>
		</van-row>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	}
}
</script>
<style scoped lang="less">
.search-bar {
	::placeholder {
		color: #e5e5e5;
	}
	height: 1rem;
	background: #e5017d;
    line-height: 1rem;
    overflow: hidden;
	.position {
		font-size: 0.6rem;
	}
	.search-input {
		width: 100%;
		height: 0.6rem;
		background: none;
		border-bottom: 1px solid #fff;
	}
	.search-btn {
		font-size: 0.34rem;
	}
}
</style>
