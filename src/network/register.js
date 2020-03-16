import {request} from "./request";

export function registerUser(username,passWord) {
  return request({
    url:'/user',
    method:'post',
    data:{
      username,
      passWord,
    }
    
  })
}


