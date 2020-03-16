###引入node-sass来编译scss
1.注意scss语法$ 和 less类似@

### 验证码登录 可以设置定时器
1.采用``来动态更改时间 ${}__

###加密
1.sha1js加密 或者 md5加密
2.加密过程
#### 1首先 前端注册 
1321122a(普通密码) ->加密 sha1('1321122a')->'3154sadasdassd'
####2.然后 后端在进行再次加密  密码一致则加密密码也相同

###请求拦截
1.一般对于请求拦截 可以在拦截前做一些操作
    比如加userid token
    
   
###  cookie存储
####1.本地html存储
sessionStorage.setItem('isLoad',JSON.stringify(this.isLoad))
短期 关闭浏览器就没有 只能存储字符串类型
#### 2.localStorage存储
长期 需要手动清除 格式和本地html类似
####3.cookie存储的话 则用于需要发给后台对应的场景 或者登陆权限token~~~~
前两个用于小场景

###token跳转
#### 1.一开始未登录 token不存在 /home的路径不符合 跳回login
#### 2.此时 第二次调到login 符合 停止执行before
#### 3.登陆后 token存在 也就不死循环执行before

###点击退出按钮 退出登录或者 从主页跳转到登录页面时
####1.清除cookie和vuex上的token
####2.关于vuex 在actions提交 异步操作 不能在mutations