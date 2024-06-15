<template>
	<view>
		<uni-section title="基本用法" type="line">
			<uni-search-bar @confirm="search" :focus="focusFlag" v-model="searchValue" @blur="blur" @focus="focus" @input="input"  cancelButton="none"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
		</uni-section>
		
		<scroll-view>
			<uni-section title="双标题卡" type="line"  v-for="elem in array" :key="elem.id">
				<uni-card :title="elem.title" :sub-title="elem.name" extra="额外信息" :thumbnail="avatar" @click="onClick">
					<text class="uni-body">关联行业。</text>
				</uni-card>
			</uni-section>
		</scroll-view>
	</view>
	
</template>

<script>
	import { test } from './index-api.js'

	export default {
		data() {
			return {
				searchValue: '',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				array:[
					{id:1,name:"小明",age:16},
					{id:2,name:"大明",age:18},
				],
		        focusFlag: false
			}
		},
		onLoad() {
		    console.log('页面加载');
			// 接口调用
			test().then((res) => {
				console.log(111)
				console.log(res)
				this.array = res.data
				   
			}).catch(err => {
			})
		},
		 onShow() {
		    console.log('页面显示');
			// 清空搜索框焦点
			this.focusFlag = false
		  },
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
				
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
				
			},
			focus(e) {
				console.log('跳转:')
				
				uni.navigateTo({
				  url: '/pages/search/search'// 跳转到搜索页
				})
				
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>

<style lang="scss">

	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color:#666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>
