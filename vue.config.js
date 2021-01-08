const path = require("path");

module.exports = {
  devServer: {
    // 监听端口
    port: 8080,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  css: {
    // css预设器配置项
    loaderOptions: {
		sass: {
		  additionalData:`@import "./src/style/var.scss";`
		}
	}
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    }
  },
};