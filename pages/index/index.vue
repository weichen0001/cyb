<template>
	<view>


		<uni-search-bar @confirm="search" :focus="false" v-model="selectFormData.ideaName" @blur="blur" @focus="focus"
			@input="input" cancelButton="none" @cancel="cancel" @clear="clear">
			<template v-slot:searchIcon>
				<view @click="toggle('top')">
					筛选{{sxText}}<uni-icons size="8" class="icon iconfont icon-choose"></uni-icons>
				</view>
			</template>
		</uni-search-bar>


		<scroll-view>
			<view v-for="elem in array" :key="elem.id">
				<uni-card :title="elem.title" :sub-title="elem.name" extra="额外信息" :thumbnail="avatar" @click="onClick">
					<text class="uni-body">关联行业。</text>
				</uni-card>
			</view>
		</scroll-view>
	</view>

	<view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#fff" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<uni-section title="行业" type="line" padding>


					<!-- 			<view class="tag-view">
					
						<uni-tag class="tag" v-for="tag in tags" :key="tag.id" :text="tag.name" :inverted="tag.inverted"
							@click="setInverted(tag)"></uni-tag>
					
					
					</view> -->

					<view class="tag-container">
						<view class="row" v-for="(row, index) in tagRows" :key="index">
							<uni-tag class="tag" v-for="tag in row" :key="tag.id" :text="tag.name"
								:inverted="tag.inverted" @click="setInverted(tag)"></uni-tag>
						</view>
					</view>

					<view class="view-class">
						<button type="default" plain="true" size="mini" class="margin-right: 20px;"
							@click="clearHy()">清除</button>
						<button type="primary" plain="true" size="mini" class="margin-right: 20px;"
							@click="confirmHy()">确定</button>
					</view>



				</uni-section>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		test,ideaList
	} from './index-api.js'

	export default {
		data() {
			return {
				searchValue: '',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				array: [{
						id: 1,
						name: "小明",
						age: 16
					},
					{
						id: 2,
						name: "大明",
						age: 18
					},
				],
				focusFlag: false,
				inverted: false,
				sxText: '',
				sxCount: 0,
				tags: [{
						id: 1,
						name: "不限",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					},
					{
						id: 2,
						name: "医疗健康",
						inverted: true,
					},
					{
						id: 3,
						name: "旅游",
						inverted: true,
					}
				],
				tagRows: [
					[{
							id: 1,
							name: "不限",
							inverted: true,
						},
						{
							id: 2,
							name: "医疗健康",
							inverted: true,
						}
					],
					[{
							id: 4,
							name: "音乐/视频/阅读",
							inverted: true,
						},
						{
							id: 5,
							name: "在线教育",
							inverted: true,
						}
					],
					[{
							id: 7,
							name: "人力资源服务",
							inverted: true,
						},
						{
							id: 8,
							name: "企业服务",
							inverted: true,
						}
					]
				],
				selectedTags: [],
				// 基础表单数据
				selectFormData: {
					ideaName: '',
					industryIds: [],
					pageNo:1,
					pageSize:1000
				},
			}
		},
		onLoad() {
			console.log('页面加载');
			// 接口调用
			test().then((res) => {
				console.log(111)
				console.log(res)
				this.array = res.data

			}).catch(err => {})
		},
		onShow() {
			console.log('页面显示');
		},
		methods: {
			toggle(type) {

				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			search(res) {
				console.log('搜索:'+JSON.stringify(this.selectFormData))
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})

				ideaList(this.selectFormData).then((res) => {
					console.log("返回:"+res)
					this.array = res.data

				}).catch(err => {})


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

				// uni.navigateTo({
				// 	url: '/pages/search/search' // 跳转到搜索页
				// })

			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			sxClick(res) {
				console.log('筛选:')
				uni.navigateTo({
					url: '/pages/sx/sx' // 跳转到搜筛选页
				})

			},


			setInverted(tag) {
				this.tagRows.forEach((tags, index) => {
					tags.forEach((item, index) => {
						if (item.id === tag.id) {
							if (item.inverted) {
								item.inverted = false
							} else {
								item.inverted = true
							}
						}
					});
				});
				if (tag.id === 1 && !tag.inverted) {
					this.tagRows.forEach((tags, index) => {
						tags.forEach((item, index) => {
							if (item.id !== 1) {
								item.inverted = true
							}
						});
					});
				}
				if (tag.id !== 1 && !tag.inverted) {
					this.tagRows.forEach((tags, index) => {
						tags.forEach((item, index) => {
							if (item.id === 1) {
								item.inverted = true
							}
						});
					});
				}
				// this.selectedTags = []
				// this.tagRows.forEach((tags, index) => {
				// 	tags.forEach((item, index) => {
				// 		if (!item.inverted) {
				// 			this.selectedTags.push(item.id)
				// 		}
				// 	});
				// });
				console.log("选择行业：" + this.selectedTags)
			},

			clearHy() {
				this.selectedTags = []
				console.log("选择行业：" + this.selectedTags)
				this.tagRows.forEach((tags, index) => {
					tags.forEach((item, index) => {
						if (item.id === 1) {
							item.inverted = false
						} else {
							item.inverted = true
						}
					});
				});
			},

			confirmHy() {
				this.selectFormData.industryIds = []
				this.sxCount = 0
				this.sxText = ''
				this.tagRows.forEach((tags, index) => {
					tags.forEach((item, index) => {
						if (!item.inverted) {
							this.selectFormData.industryIds.push(item.id)
							if (item.id !== 1) {
								this.sxCount++
							}
						}
					});
				});
				console.log("选择行业：" + this.selectFormData.industryIds)
				if (this.sxCount > 0) {
					this.sxText = '•' + this.sxCount
				}
				this.$refs.popup.close()
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
		color: #666;
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

	/*自定义icon*/
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/*标签*/
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10px;
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.tag {
		width: calc(45.33%);
		margin-right: 10px;
		text-align: center;
		/* 添加这行代码使文字居中 */
	}


	.view-class {
		display: flex;
		justify-content: flex-end;
	}
</style>