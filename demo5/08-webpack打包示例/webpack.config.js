const path = require("path")

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
      }
    ]
  }
}