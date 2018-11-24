<!--
	作者：it_xuelei@163.com
	时间：2018-11-24
	描述：首页
-->
<template>
	<div class="vux_index">
		<tab :line-width=2 active-color='#fc378c' v-model="index">
			<tab-item class="vux-center">精选</tab-item>
			<tab-item class="vux-center">美食</tab-item>
		</tab>
		<swiper :list="demo01_list" v-model="demo01_index"  @on-index-change="demo01_onIndexChange"></swiper>					
		<swiper v-model="index" height="100px" :show-dots="false">
			<swiper-item>
				<div class="tab-swiper vux-center">
					精选 Container
				</div>
			</swiper-item>
			<swiper-item>
				<div class="tab-swiper vux-center">美食 Container</div>
			</swiper-item>
		</swiper>
		<!--<div class="banner">
					<swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>					
				</div>-->
	</div>
</template>

<script>
	import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, } from 'vux'
	const list = () => ['精选', '美食', '电影', '酒店', '外卖']
	const baseList = [{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
		title: '送你一朵fua'
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
		title: '送你一辆车'
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
		title: '送你一朵fua'
	},{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg', // 404
		title: '送你一次旅行',
		fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]
	export default {
		name: 'index',
		data() {
			return {
				list2: list(),
				demo01_list: baseList, //轮播图
				demo2: '精选',
				index: 0,
				demo01_index: 0 //轮播图
			}
		},
		components: {
			Tab,
			TabItem,
			Sticky,
			Divider,
			XButton,
			Swiper,
			SwiperItem

		},
		mounted() {

		},
		methods: {
			//轮播图
			demo01_onIndexChange (index) {
      this.demo01_index = index
    }
			
		},
		created() {

		}
	}
</script>
<style lang="less" scoped="scoped">
	.vux_index {
		.tab-swiper {
			background-color: #fff;
			height: 100px;
			width: 100%;
		}
		.banner{
			background: #abc;
		}
	}
</style>