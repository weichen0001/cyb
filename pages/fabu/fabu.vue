<template>
	<view class="container">
		<!-- 基础用法，不包含校验规则 -->
		<uni-forms ref="baseForm" :rules="rules" :model="baseFormData" labelWidth="80px" label-position="top">

			<uni-section type="line" title="想法描述">
				<view class="example hint-font-view">
					<view class="hint-font">&nbsp;&nbsp;&nbsp;&nbsp;请描述下您的想法，想法所属行业，想法标题，以及您的想法解决了行业内的什么问题</view>
				</view>
				<view class="example">
					<uni-forms-item label="行业" required name="relevanceIndustryIds">
						<uni-data-picker v-model="baseFormData.relevanceIndustryIds[0]" :localdata="industryData"
							popup-title="行业"></uni-data-picker>
					</uni-forms-item>
					<uni-forms-item label="标题" required name="title">
						<uni-easyinput v-model="baseFormData.title" placeholder="请输入点子标题" />
					</uni-forms-item>
					<uni-forms-item label="描述" required name="desc">
						<uni-easyinput type="textarea" v-model="baseFormData.desc" placeholder="请输入点子介绍" />
					</uni-forms-item>
				</view>
			</uni-section>

			<uni-section type="line" title="需求描述">
				<view class="example">
					<view class="hint-font">&nbsp;&nbsp;&nbsp;&nbsp;请描述下您的需求，需要哪个行业的支持，以及具体需要什么样的支持</view>
				</view>
				<view class="example">
					<uni-forms-item label="行业" required name="industry">
						<uni-data-picker v-model="baseFormData.demand[0].industryId" :localdata="industryData"
							popup-title="行业"></uni-data-picker>
					</uni-forms-item>
					<uni-forms-item label="需求" required name="desc">
						<uni-easyinput type="textarea" v-model="baseFormData.demand[0].demandDescribe"
							placeholder="请输入需求描述" />
					</uni-forms-item>
				</view>
			</uni-section>

			<!-- <uni-forms-item v-for="(item,index) in baseFormData.demand" :key="item.id" :label="item.label+' '+index"
				required :rules="rules" :name="['demand',index,'value']">
				<view class="form-item">
					<uni-forms-item label="行业" required name="industry" +index>
						<uni-data-picker v-model="baseFormData.demand[index].industryId" :localdata="industryData"
							popup-title="行业"></uni-data-picker>
					</uni-forms-item>
					<uni-forms-item label="需求" required name="desc">
						<uni-easyinput type="textarea" v-model="baseFormData.demand[index].demandDescribe"
							placeholder="请输入需求描述" />
					</uni-forms-item>
					<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
				</view>
			</uni-forms-item> -->
		</uni-forms>
		<view class="button-group">
			<button type="primary" size="mini" @click="add">新增需求</button>
			<button type="primary" size="mini" @click="submit('baseForm')">提交</button>
		</view>
		<!-- <button type="primary" @click="submit('baseForm')">提交</button> -->
	</view>
</template>

<script>
	import {
		addIdea,
		industryList
	} from './fabu-api.js'
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					relevanceIndustryIds: [],
					title: '',
					desc: '',
					demand: [{}]
				},
				// 城市数据
				industryData: [{
					text: "制造业",
					value: 1
				}, {
					text: "科技",
					value: 2
				}],
				// 校验规则
				rules: {
					relevanceIndustryIds: {
						rules: [{
							required: true,
							errorMessage: '点子所属行业不能为空'
						}]
					},
					title: {
						rules: [{
							required: true,
							errorMessage: '点子标题不能为空'
						}]
					},
					desc: {
						rules: [{
							required: true,
							errorMessage: '点子描述不能为空'
						}]
					}
				},
			}
		},
		computed: {
			baseFormData() {
				console.log(this.baseFormData.demand);
			}
		},
		created() {
			// console.log(this.baseFormData.demand);
			// console.log(123);
			// this.baseFormData.demand.push({
			// 	label: '域名',
			// 	value: '',
			// 	industryId:1,
			// 	demandDescribe:"1",
			// 	id: Date.now()
			// });
			// industryList().then(result => {
			// 	this.industryData = result.data.map(item => ({
			// 		"text": item.name,
			// 		"value": item.id
			// 	}));
			// });
			// console.log(this.$refs.select);
		},
		methods: {
			add() {
				this.baseFormData.demand.push({
					label: '域名',
					value: '',
					rules: [{
						'required': true,
						errorMessage: '域名项必填'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
			submit(ref) {
				console.log(JSON.stringify(this.baseFormData));
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
					addIdea(this.baseFormData);
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>

<style lang="scss">
	.hint-font {
		font-size: 13px;
		color: red;
	}

	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		line-height: 35px;
		margin-left: 10px;
	}
</style>