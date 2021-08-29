<template>
	<div class="service">
		<div class="container">
			<ul>
				<li><span class="icon-setting"></span>预约维修服务</li>
				<li><span class="icon-7day"></span>7天无理由退货</li>
				<li><span class="icon-15day"></span>15天免费换货</li>
				<li><span class="icon-post"></span>满160元包邮</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ServiceBar"
	}
</script>

<style scoped lang="less">
	.service {
		padding:33px 0;
		color: #666666;
		font-size: 16px;
		li {
			display: inline-block;
			width: 24.8%;
			text-align: center;
			border-right: 1px solid #E5e5e5;
			span {
				display: inline-block;
				width: 20px;
				height: 20px;
				vertical-align: middle;
				margin-right: 8px;
			}
			.icon-setting {
				display: inline-block;
				background: url(../../assets/icon/icon-setting.png) no-repeat center;
				background-size:contain;
			}
			.icon-7day {
				display: inline-block;
				background: url(../../assets/icon/icon-7day.png) no-repeat center;
				background-size:contain;
			}
			.icon-15day {
				display: inline-block;
				background: url(../../assets/icon/icon-15day.png) no-repeat center;
				background-size:contain;
			}
			.icon-post {
				background: url(../../assets/icon/icon-post.png) no-repeat center;
				background-size:contain;
			}
		}
	}
	
	.container {
		width: 1226px;
		margin-right: auto;
		margin-left: auto;
	}
</style>
