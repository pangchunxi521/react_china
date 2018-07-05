/**
 * Created by Administrator on 2018/5/26.
 */
module.exports = {
    entry:{
        demo1:__dirname + '/app/index.js',
        demo2:__dirnamr + '/app/shijanchuli.js'
    },
    output:{
        path:__dirname +  '/dist',
        filename:'[namr].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {loader:'babel-loader'}
                ]
            }
        ]
    },
    devServer:{
        contentBase:'./app/index.js',
        port:'0.0.0.0',
        open:true,
        inline:true,
        hot:true,
        historyApiFallback:false
    },
    resolve:{
        extensions: ['.css','.js','.jsx']
    }
}