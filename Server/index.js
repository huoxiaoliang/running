const express = require("express");
const path = require("path");
const app = express();
// 解决跨域问题 注意解决跨域的代码要放在处理路由的代之前，否则将会不起作用，这样就可以解决跨域问题，还能直接本地打开访问页面
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // if(req.method.toLowerCase() == 'options')
  //     res.send(200); // 让options 尝试请求快速结束
  // else
  //     next();
  next();
});

app.use(express.urlencoded({ extended: false })); // 请求体中的数据会以普通表单形式（键值对）发送到后端
app.use(express.json({ extended: false })); // 请求体中的数据会以json字符串的形式发送到后端
// 静态资源
app.use(express.static(path.join(__dirname, "public"))); //静态资源声明
app.use(express.static(path.join(__dirname, "uploads"))); //上传文件
app.listen(3002, () => {
  console.log("启动 :>> ", 3002);
});
