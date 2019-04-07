const router = require('koa-router')();
const db = require('../db/equipment/equipment.js')

const routers = router
    .get('/', async (ctx) => {
        ctx.response.body = await db.query()
})
module.exports = routers