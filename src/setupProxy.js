const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {  
      target: 'http://127.0.0.1', 
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
    })
    
  )
}