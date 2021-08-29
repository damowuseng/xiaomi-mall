import { request } from "./index";

export function getNavData() {
	return request ({
		url: '/user/login'
	})
}
