import axios from "axios";
import baseConfig from '../baseConfig';

const warpUrl = (s: string) => {
  if (!s) s = '';
  return `${baseConfig.baseUrl}${s}`
}

const instance = axios.create()


// 查询用户公益行为（分页查询）
const getUserBatchInfo = (pageNum: number, pageSize: string, userId: number) => {
  return instance({
    url: warpUrl(`/user/batchinfo/${pageSize}`),
    method: 'get',
    params: {
      pageNum,
      pageSize,
      userId
    }
  })
}

// 根据用户名id删除用户信息
const deleteUserById = ( userId: number ) => {
  return instance({
    url: warpUrl(`/user/del/${userId}`),
    method: 'delete',
  })
}

// 查询用户公益行为（分页查询）
const getUserBehaviorById = (userId: number) => {
  return instance({
    url: warpUrl(`/user/detail/${userId}`),
    method: 'get',
    params: {
      userId
    }
  })
}

// 用户查询所有机构信息
const getUserInsById = ( userId: number ) => {
  return instance({
    url: warpUrl(`/user/institution/${userId}`),
    method: 'get',
  })
}

// 登录
const postUserLogin = ( userName: string, userPwd: string, role: string ) => {
  return instance({
    url: warpUrl('/user/login'),
    method: 'post',
    params: {
      userName,
      userPwd,
      userRole: role,
      userTel: userName
    }
  })
}

// 注册
const postUserRegister = ( userName: string, userPwd: string, role: string ) => {
  return instance({
    url: warpUrl('/user/register'),
    method: 'post',
    params: {
      userName,
      userPwd,
      userRole: role,
      userTel: userName
    }
  })
}

// 修改用户信息
const postUserUpdate = (userId: number, userName: string, userPwd: string, userTel: string) => {
  return instance({
    url: warpUrl('/user/update'),
    method: 'put',
    params: {
      userId,
      userName,
      userPwd,
      userTel
    }
  })
}

export {
  getUserBatchInfo,
  deleteUserById,
  getUserInsById,
  postUserLogin,
  postUserRegister,
  postUserUpdate,
  getUserBehaviorById
}