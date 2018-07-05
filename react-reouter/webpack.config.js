/**
 * Created by Administrator on 2018/4/20.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    temelate:__dirname + '/src/index.html',
    filename:'index.html',
    inject:'body'
});
module.exports = {
    entry:'./sec/index.js',
    output:{
        path:__dirname + '/dist',
        filename:'index_bundle.js'
    },
    module:{
        preLoaders:[
            {
                test:/\.(js|jsx)$/,
                use:'eslint-loader'
            }
        ],
        rules:[{
            test:/\.js$/,
            use:'babel-loader'
        }]
    },
    devServer:{
        inline:true,
        open:true,
        port:8008
    },
    plugins:[HTMLWebpackPluginConfig]
}
