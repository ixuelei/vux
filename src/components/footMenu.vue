<!--
	作者：it_xuelei@163.com
	时间：2018-11-24
	描述：底部导航
-->
<template>
	<div class="vux_footMenu">
		<router-view></router-view>
		<div style="height: 1.2rem;"></div>
		<div class="menu">
			<tabbar>
				<tabbar-item>
					<img slot="icon" src="../assets/logo.png">
					<span slot="label">书架</span>
				</tabbar-item>
				<tabbar-item show-dot>
					<img slot="icon" src="../assets/logo.png">
					<span slot="label">书城</span>
				</tabbar-item>
				<tabbar-item show-dot>
					<img slot="icon" src="../assets/logo.png">
					<span slot="label">听书</span>
				</tabbar-item>
				<tabbar-item selected link="/component/demo">
					<img slot="icon" src="../assets/logo.png">
					<span slot="label">漫画</span>
				</tabbar-item>
				<tabbar-item badge="2">
					<img slot="icon" src="../assets/logo.png">
					<span slot="label">我的</span>
				</tabbar-item>
			</tabbar>
		</div>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'footMenu',
		data() {
			return {}
		},
		components: {
			Tabbar,
			TabbarItem
		},
		mounted() {},
		created() {},
		methods: {}
	}
</script>
<style lang="less" scoped="scoped">
	.vux_footMenu{
		.menu{
			position: fixed;
			bottom: 0rem;
			width: 100%;	
		}
	}
</style>