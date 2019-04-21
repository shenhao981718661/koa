const router = require('koa-router')();
const db = require('../db/owner/owner.js')

const routers = router
    .get('/', async (ctx) => {
        ctx.response.body = await db.query()
    })
    .post('/add', async (ctx) => {
        ctx.response.body = await db.add(ctx.request.body)
    })
    .post('/edit', async (ctx) => {
        ctx.response.body = await db.edit(ctx.request.body)
    })
    .post('/remove', async (ctx) => {
        ctx.response.body = await db.remove(ctx.request.body)
    })
    .post('/queryUserInfo', async (ctx) => {
        ctx.response.body = await db.queryUserInfo(ctx.request.body)
    })
module.exports = routers