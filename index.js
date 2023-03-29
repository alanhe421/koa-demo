const Koa = require('koa');
const proxyServer = require('./proxy');
const app = new Koa();

// response
app.use(async (ctx, next) => {
  next();
  console.log(0);
});

app.use((ctx, next) => {
  next();
  console.log(1);
});

app.use(ctx => {
  proxyServer.web(ctx.req, ctx.res, {
    target: 'http://127.0.0.1:3001',
    context: ctx // 传递ctx对象
  });
  console.log(2);
});

const server = app.listen(3000);
console.log('koa-demo listening at http://127.0.0.1:3000');
