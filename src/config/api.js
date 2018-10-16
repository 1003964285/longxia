import axios from './axios.js'

// 权限
export const sessionId = data => axios('/layer/menu/menu/listByUser',data,2);
//上传图片
export const uploadImg = data => axios('/layer/oss/ossUtil/policy',data,2);



//登录
export const login = data => axios('/authentication/form',data,1);

//获取课时汇总
export const totalClass = data => axios('/course/project/total/class',data,1, "GET");

//按月获取课时
export const classByMonth = data => axios('/course/project/class/month/' + data,{},1, "GET");

//按月获取课时
export const saveClasses = data => axios('/course/project/classes' , data,1, "PUT");




























