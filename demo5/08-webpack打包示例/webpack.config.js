const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "./index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "build.js"
  },
  // 配置 loader 加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }   // 将 less 编译成 css     
        ]
      },
      {
        test: /\.(jpg|gif|png|jpeg|bmp|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          },
        ]
      },
      {
        test: /\.(ttf|woff2|woff|eot)$/,
        use: [
          {
            loader: "url-loader"
          },
        ]
      },
      {
        test: /\.js$/,
        // 添加排除项, 不对 node_modules 下的内容做处理
        exclude: /(node_modules|bower_components)/,
        use: [
          { 
            loader: "babel-loader",
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    })
  ]
}