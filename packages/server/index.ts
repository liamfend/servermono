import koa from 'koa';

const app = new koa();

app.use(async (ctx, next) => {
  console.log('1');
  await next();
  console.log('2');
  ctx.body = 'He sadf llofsfsfcccc sfsf dsafdsa World';
});
app.listen(3000);

app.use(async (ctx, next) => {
  console.log('3');
  await next();
  console.log('4');
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
