import request from "@/utils/request";

export const reqGetCategoryApi = (id) =>
    request({ url: '/category', method: 'get', params: { id } })