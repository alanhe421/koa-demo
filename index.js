const Koa = require('koa');
const app = new Koa();

// response
app.use(async (ctx, next) => {
  // if(ctx.url === '/'){
  //   next();
  // }
  try {
    await new Promise((resolve, reject) => {
      reject('helloworld');
    });
  } catch (e) {
    ctx.status = 500;
    ctx.body = e+'123';
  }
});

app.use(ctx => {
  ctx.status = 201;
  console.log(ctx.url);
  ctx.body = '123455 Koa';
});

const server = app.listen(3000);
console.log('koa-demo listening at http://127.0.0.1:3000');
