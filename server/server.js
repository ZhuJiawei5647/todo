const Koa = require('koa')
const send = require('koa-send')
const path = require('path')

const staticRouter = require('./routers/static')
const apiRouter = require('./routers/api')
const createDb = require('./db/db')
const config = require('../app.config')

const db = createDb(config.db.appId, config.db.appKey)

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'
app.use(async (ctx, next) => {
  try {
    console.log(`request width path ${ctx.path}`)
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.bosy = 'please try again later'
    }
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, 'favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

app.use(apiRouter.routes()).use(apiRouter.allowedMethods())

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())

let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  pageRouter = require('./routers/ssr')
}
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
