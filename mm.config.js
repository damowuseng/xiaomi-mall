/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */
module.exports = util => {
	const {
		libObj: { mockjs },
	} = util
	return {
		guard: true, // 异常崩溃是否自动重启
		port: 9000, // http://127.0.0.1:9000 可以打开经过代理的接口
		testPort: 9005, // http://127.0.0.1:9005 可以进行 mockm 的界面式操作
		replayPort: 9001, // http://127.0.0.1:9001 可以返回历史的接口响应
		watch: [],
		proxy: {
			'/': `http://www.httpbin.org/`, // 要代理的后端接口地址
		},
		api(util) {
			return {
				// 创建接口并使用 mockjs 生成数据
				'get /api/user/login': mockjs.mock({ // http://127.0.0.1:9000/api/test 可以访问这个接口
					"status": 0,
					'products|3-7': [{
						userId : `@id`,
						userName: `@cname`,
						email:`@email`,
						phone: `@number`,
						price: `@integer(1600, 4400)`
					}]
				}),
			}
		},
	}
}
