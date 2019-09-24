<template>
	<div class="home">
		<v-searchBar />
		<v-banner :bannerList="bannerList" />
	</div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import banner from '@/components/banner'
export default {
	name: 'home',
	components: {
		'v-searchBar': SearchBar,
		'v-banner': banner
	},
	data() {
		return {
			bannerList: [
				{
					imageUrl:
						'http://img4.imgtn.bdimg.com/it/u=3491746237,2140486831&fm=26&gp=0.jpg'
				},
				{
					imageUrl:
						'http://img2.imgtn.bdimg.com/it/u=1978629698,243761766&fm=26&gp=0.jpg'
				},
				{
					imageUrl:
						'http://img2.imgtn.bdimg.com/it/u=3617658628,1739582642&fm=26&gp=0.jpg'
				}
			]
		}
	}
}
</script>
