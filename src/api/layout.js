import request from '@/utils/request';

//获取一级导航分类的数据
export const reqGetCategoryApi = () =>
    request({ url: '/home/category/head', method: 'get' });