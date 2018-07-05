/*
webpack.config.js
 */

module.exports = {
    entry:__dirname + '/app/index.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:'css-loader'},
                    {loader:'style-loader'}
                ]
            }
        ]
    },
    devServer:{
        contentBase:'./app/index.js',
        port:'8080',
        open:true,
        inline:true,
        hot:true,
        historyApiFallback:false
    },
    resolve:{
        extensions:['.css','.js','.jsx']
    },

}