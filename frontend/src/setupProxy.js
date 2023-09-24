const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://aventuras.co.in',
            changeOrigin: true,
        })
    );
};

// createProxyMiddleware({
//     // target: 'https://admin.aventuras.co.in',
//     target: 'https://aventuras.co.in',
//     changeOrigin: true,
// })