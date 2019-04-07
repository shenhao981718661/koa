const router = require('koa-router')();
const db = require('../db/index.js')
const person = require('../db/person/person.js')

const routers = router
    .post('/', async (ctx) => {
        const {userName, password} = ctx.request.body
        ctx.response.body= await db.query(ctx.request.body)
    })
    .get('/person', async (ctx) => {
        ctx.response.body = await person.query()
    })
    .post('/adduser', async (ctx) => {
        console.log(ctx.request.body)
        ctx.response.body = await db.save(ctx.request.body)
    })
    module.exports = routers