// const Koa = require("koa");
// const Router = require("koa-router");

const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use((ctx) => {
  const url = ctx.url;

  switch (url) {
    case "/":
      ctx.body = "<h1>Index Sayfasına Hoşgeldiniz</h1>";
      break;
    case "/hakkimda":
      ctx.body = "<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>";
      break;
    case "/iletisim":
      ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz</h1>";
      break;
    default:
      ctx.body = "<h1>404 Not Found!</h1>";
      break;
  }
});

app.listen(port);
