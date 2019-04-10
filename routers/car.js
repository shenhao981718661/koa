const router = require('koa-router')();
const db = require('../db/car/car.js')

const routers = router
    .get('/', async (ctx) => {
        ctx.response.body = await db.query()
    })
    .post('/add', async (ctx) => {
        ctx.response.body = await db.add(ctx.request.body)
    })
module.exports = routers