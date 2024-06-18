<template>
	<view>
		
		<uni-section title="行业" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
				
			
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
					
				</view>
			</view>
		</uni-section>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				inverted: false,
				
			}
		},
		methods: {
			setInverted() {
							this.inverted = !this.inverted;
						},
			
		}
	}
</script>

<style>

</style>
