module.exports = {
    publicPath: '/',
    lintOnSave: false,
    devServer:{
        // 本地访问localhost:8080的 时候 由Node把请求转移到代理地址
        proxy:'http://localhost:3000/'
    }
}