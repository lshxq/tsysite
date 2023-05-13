module.exports = {
  publicPath: "/site", // 在css中有引用，不能该，不然背景图找不到了
  devServer: {
    host: "localhost", //target host
    port: 8080,
    proxy: {
      "/site-api": {
        target: "http://121.40.72.215/", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          "^/site-api": "/site-api",
        },
      },
      /*
      "/site-api": {
        target: "http://localhost:8081/", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          "^/site-api": "/site-api",
        },
      },
      
      "/site-upload": {
        target: "http://localhost/", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          "^/site-upload": "/site-upload",
        },
      },
      */
    },
  },
};
