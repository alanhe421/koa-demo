const httpProxy = require('http-proxy');
const proxyServer = httpProxy.createProxyServer({
  secure: false, ws: false, changeOrigin: false, hostRewrite: true, timeout: 20 * 1000, proxyTimeout: 20 * 1000,
});


proxyServer.on('proxyRes', (proxyRes, req, res, options) => {
  console.log(proxyRes, req);
});

proxyServer.on('proxyReq', (proxyReq, req, res, options) => {
  console.log(proxyReq, req);
});


module.exports = proxyServer;
