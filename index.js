const Koa = require('koa');
const path = require('path')
const ModelDb = require('./db')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static');

const user = require('./routers/user.js')
const equipment = require('./routers/equipment.js')

const app = new Koa()
app.use(bodyParser())
app.use(cors());

let router = new Router()

router.use('/equipment', equipment.routes(),equipment.allowedMethods())
router.use('/user', user.routes(),user.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.use(static(
    path.join( __dirname,  './static')
))
app.listen(4000);