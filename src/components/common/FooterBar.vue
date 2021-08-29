<template>
	<div class="footer">
		<div class="f-logo">
			<img src="/imgs/logo-footer.png" alt="">
			<p>大米商城</p>
		</div>
		<div class="f-link">
			<a href="#">大米之家</a><span>|</span>
			<a href="#">服务中心</a><span>|</span>
			<a href="#">大米之家</a><span>|</span>
			<a href="#">大米之家</a>
		</div>
		<div class="copyright">
			Corpyright @2021 dami.com All Rights
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped lang="less">
.footer {
	height: 234px;
	border-top: 4px solid #FF6600;
	background-color: #333333;
	color: #999999;
	font-size: 16px;
	text-align: center;
	.f-logo {
		margin-top: 46px;
		margin-bottom: 31px;
		img {
			width: 53px;
			height: 36px;
			margin-bottom: 13px;
		}
	}
	.f-link {
		a {
			color: #999999;
			display: inline-block;
		}
		span {
			margin: 0 10px;
		}
		margin-bottom: 13px;
	}
}
</style>
