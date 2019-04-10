const router = require('koa-router')();
const db = require('../db/message/message.js')

const routers = router
    .get('/', async (ctx) => {
        ctx.response.body = await db.query()
    })
    .post('/add', async (ctx) => {
        console.log(ctx.request.body)
        ctx.response.body = await db.add(ctx.request.body)
    })
module.exports = routers