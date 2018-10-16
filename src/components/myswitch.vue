<template>
	<div class="switch">
		<div class="switch-wrap" :class="{active:isOpen==0}">
			<span class="text" v-if="isOpen==0">关闭</span>
			<span class="text" v-else>开启</span>
			<button class="switch-btn" :class="{active:isOpen==0}"></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {

		},
		props: {
			isOpen: {
				type: String,
				default: "0"
			}
		},
		methods: {

		},
		mounted() {
//			console.log(this.isOpen)
		},
		watch: {
			isOpen: function(val) {
//				console.log(val)
			}
		}

	}
</script>

<style scoped lang="scss">
	.switch {
		display: inline-block;
		width: 86px;
		height: 26px;
		padding: 0 13px;
		padding-top: 3px;
		margin-left: 10px;
		text-align: center;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.switch-wrap {
			position: relative;
			height: 20px;
			width: 60px;
			background: #DB5050;
			border-radius: 10px;
			line-height: 20px;
			&.active {
				background: #4F4D4D;
			}
			.text {
				font-size: 14px;
				color: #fff;
			}
			.switch-btn {
				height: 26px;
				width: 26px;
				background: #fff;
				box-shadow: 0 0 3px #333333;
				display: block;
				border-radius: 50%;
				position: absolute;
				right: -13px;
				top: -3px;
				&.active {
					position: absolute;
					left: -13px;
				}
			}
		}
	}
</style>