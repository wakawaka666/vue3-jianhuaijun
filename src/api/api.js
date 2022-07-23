// 引入axios拦截器
import service from "./http.js";

// 开店投资计算器
export function Calculator(data) {
    return service.request({
        method: "POST",
        url: "/form/1/4",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// 意见反馈
export function Feedback(data) {
    return service.request({
        method: "POST",
        url: "/form/1/2",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// 加盟合作
export function Cooperation(data) {
    return service.request({
        method: "POST",
        url: "/form/1/3",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// 获取新闻列表
export function GetNewsList(data) {
    return service.request({
        method: "POST",
        url: "/v1/contents",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'X-SS-API-KEY': '50da616d-cc40-40d1-9287-cc42b6b638e7'
        }
    })
}


