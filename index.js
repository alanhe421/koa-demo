const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  console.log(ctx.url);
  ctx.body = 'Hello Koa';
});

const server = app.listen(3000);
console.log('koa-demo listening at http://127.0.0.1:%s', server.address().port);
