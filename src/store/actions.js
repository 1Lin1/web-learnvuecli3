export  default {
  addPwd_Token(context,payload){
    return new Promise((resolve,reject) => {
      if(payload === ''){
        context.commit('setPwd_Token',payload);
        resolve('成功退出')
      }else{
        context.commit('setPwd_Token',payload);
      }
    })
  },
  addUserName_Token(context,payload){
    context.commit('setUserName_Token',payload)
  }
}