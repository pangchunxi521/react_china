/**
 * Created by Administrator on 2018/4/19.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    // 起始点从 entry 进入，因为是阵列所以也可以是多个档案
    entry: './app/shijianchuli.js',
    // output 是放入产生出来的结果的相关参数
    output: {
        path: __dirname + "/dist",
        filename: 'index_bundle.js',
    },


    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[{loader:"babel-loader"}],
                exclude: /node_modules/,

            },
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            }
        ]
    },
    // devServer 则是 webpack-dev-server 设定
    devServer: {
        inline: true,
        port: 8008,
        open:true
    },
    // plugins 放置所使用的外挂
    plugins: [HTMLWebpackPluginConfig],
    resolve:{
        extensions:[".css",".js",".jsx"]
    }
};
