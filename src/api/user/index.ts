import axios from "axios";
import baseConfig from '../baseConfig';

const warpUrl = (s: string) => {
  if (!s) s = '';
  return `${baseConfig.baseUrl}${s}`
}

const instance = axios.create()


// 查询用户公益行为（分页查询）
const getUserBatchInfo = (pageNum: number, pageSize: string, userId: number, userName: string) => {
  const nums = JSON.stringify({
    pageNum,
    pageSize,
    userId,
    userName
  })
  return instance({
    url: warpUrl(`/user/batchinfo?nums=${nums}`),
    method: 'get',
  })
}

// 根据用户名id删除用户信息
const deleteUserById = ( userId: number ) => {
  const id = JSON.stringify({
    userId,
  })
  return instance({
    url: warpUrl(`/user/del?id=${id}`),
    method: 'delete',
  })
}

// 根据用户名id查询用户信息
const getUserDetailById = ( userId: number ) => {
  const id = JSON.stringify({
    userId,
  })
  return instance({
    url: warpUrl(`/user/detail?id=${id}`),
    method: 'get',
  })
}

// 用户查询所有机构信息
const getUserInsById = ( userId: number ) => {
  const id = JSON.stringify({
    userId,
  })
  return instance({
    url: warpUrl(`/user/institution?id=${id}`),
    method: 'get',
  })
}

// 登录
const postUserLogin = ( userName: string, userPwd: string) => {
  return instance({
    url: warpUrl('/user/login'),
    method: 'post',
    data: {
      userName,
      userPwd,
    }
  })
}

// 注册
const postUserRegister = ( userName: string, userPwd: string ) => {
  return instance({
    url: warpUrl('/user/register'),
    method: 'post',
    data: {
      userName,
      userPwd,
    }
  })
}

// 修改用户信息
const postUserUpdate = (userId: number, userName: string, userPwd: string, userTel: string) => {
  return instance({
    url: warpUrl('/user/update'),
    method: 'put',
    data: {
      userId,
      userName,
      userPwd,
      userTel
    }
  })
}

export default {
  getUserBatchInfo,
  deleteUserById,
  getUserDetailById,
  getUserInsById,
  postUserLogin,
  postUserRegister,
  postUserUpdate
}