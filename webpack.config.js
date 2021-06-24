module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-url-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    'url-loader'
                ],
            }
        ]
    },
}