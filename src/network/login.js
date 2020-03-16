import {request} from "./request";

export function loadUser(username,passWord) {
  return request({
    url:'/user',
    method:'get',
    params:{
      username:username,
      passWord:passWord
    }
   
  })
}


