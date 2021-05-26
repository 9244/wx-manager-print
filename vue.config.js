const vue_config = {
    devServer: {
        proxy: {
            '/login': {
                target: 'http://192.168.31.12:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/login': '',
                }
            }
        }
    }
}

module.exports = vue_config