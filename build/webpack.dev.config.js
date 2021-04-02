// module.exports = {
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         port: 8080
//     }
// }

const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                devtools: 'cheap-module-eval-source-map'
            }
        })
    ]
}