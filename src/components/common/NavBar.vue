<template>
	<div class="header">
		<div class="nav-top-bar">
			<div class="container">
				<div class="top-left">
					<a href="#">大米商城</a>
					<a href="#">MUI</a>
					<a href="#">云服务</a>
					<a href="#">协议规则</a>
				</div>
				<div class="top-right">
					<a href="#">登录</a>
					<a href="#">注册</a>
					<a href="#" class="cart ">
						<span class="icon-cart"></span>购物车</a>
				</div>
			</div>
		</div>
		<div class="nav-header">
			<div class="container">
				<div class="logo">
					<a href="#" ></a>
				</div>
				<div class="header-menu">
					<div class="menu-item">
						<span>小米手机</span>
						<div class="dropdown-menu">
							<ul>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-2.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-4.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-5.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-6.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="menu-item">
						<span>Redmi 红米</span>
						<div class="dropdown-menu"></div>
					</div>
					<div class="menu-item">
						<span>电视</span>
						<div class="dropdown-menu">
							<ul>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-1.jpg" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-2.jpg" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-3.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-4.jpg" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-5.jpg" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
								<li class="product">
									<a href="#" target="_blank">
										<div class="p-img"><img src="/imgs/nav-img/nav-3-6.png" alt=""></div>
										<div class="p-title">小米CC10</div>
										<div class="p-price">1799</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="menu-item">
						<span>笔记本</span>
						<div class="dropdown-menu"></div>
					</div>
				</div>
				<div class="search">
					<div class="wrapper">
						<input type="text" name="key" value=""/>
						<a href="#"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		// data () {
		// 	return {
		// 		publicPath: process.env.BASE_URL
		// 	}
		// }
	}
</script>

<style scoped lang="less">
.header {
	.nav-top-bar {
		height: 39px;
		line-height: 39px;
		background-color: #333333;
		color: #B0B0B0;
		.container {
			width: 1226px;
			margin-right: auto;
			margin-left: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			a {
				display: inline-block;
				color: #B0B0B0;
				margin-right: 17px;
				
			}
			.cart {
				width: 110px;
				background-color: #FF6600;
				text-align: center;
				color: #fff;
				.icon-cart {
					display: inline-block;
					width: 16px;
					height: 12px;
					background: url('../../assets/icon/icon-cart-checked.png') no-repeat center;
					background-size:contain;
					margin-right: 4px;
				}
			}
			
		}
	}
	.nav-header {
		.container {
			position: relative;
			width: 1226px;
			height: 112px;
			margin-right: auto;
			margin-left: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo {
				display: inline-block;
				width: 55px;
				height: 55px;
				background-color: #FF6600;
				a{
					display: inline-block;
					width: 110px;
					height: 55px;
					&:after{
						content: " ";
						display:inline-block;
						width: 55px;
						height: 55px;
						background: url('/imgs/mi-home.png') no-repeat center;
						background-size: 55px;
					}
					&:before{
						content: " ";
						display:inline-block;
						width: 55px;
						height: 55px;
						background: url('/imgs/mi-logo.png') no-repeat center;
						background-size: 55px;
						transition: margin .3s;
					}
					&:hover:before{
						margin-left: -55px;
						transition: margin .3s;
					}
				}
			}
			.header-menu {
				display: inline-block;
				width: 643px;
				padding-left: 210px;
				.menu-item {
					display: inline-block;
					color: #333333;
					font-weight: bold;
					font-size: 16px;
					line-height:112px;
					margin-right: 20px;
					span {
						display:inline-block;
						height:25px;
						cursor: pointer;
						&:hover {
							color: #FF6600;
						}
					}
					span:hover +.dropdown-menu {
						height: 220px;
						visibility:visible;
					}
					.dropdown-menu {
						position: absolute;
						top: 112px;
						left: 0;
						width: 1226px;
						height: 0px;
						visibility: hidden;
						/*overflow: hidden;*/
						border-top: 1px solid #E5e5e5;
						box-shadow:0 7px 6px 0 rgba(0,0,0, 0.11) ;
						z-index: 10;
						transition: height 0.5s ;
						.product {
							position:relative;
							float:left;
							width: 16.6%;
							height: 220px;
							font-size: 12px;
							line-height:12px;
							text-align: center;
							a {
								display: inline-block;
							}
							img {
								width:auto;
								height: 111px;
								margin-top: 26px;
							}
							.p-img {
								height: 137px;
							}
							.p-title {
								font-weight: bold;
								margin-top: 19px;
								margin-bottom: 8px;
								color: #333333
							}
							.p-price {
								color: #FF6600;
							}
							&:before {
								content: "";
								position: absolute;
								top: 28px;
								right: 0;
								border-left: 1px solid #d7d7d7;
								height: 100px;
								width: 1px;
							}
							&:last-child:before {
								display: none;
							}
						}
					}
				}
			}
			.search {
				width: 319px;
				.wrapper {
					height: 50px;
					border: 1px solid #E0E0E0;
					display: flex;
					align-items:center;
					input {
						border: none;
						box-sizing: border-box;
						border-right: 1px solid #E0E0E0;
						width: 264px;
						height: 50px;
						padding-left: 14px;
					}
					a {
						display: inline-block;
						width: 18px;
						height: 18px;
						background: url('../../assets/icon/icon-search.png') no-repeat center;
						background-size: contain;
						margin-left: 17px;
					}
				}
			}
		}
	}
}
</style>
