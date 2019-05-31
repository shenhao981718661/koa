const Koa = require('koa');
const path = require('path')
const ModelDb = require('./db')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static');

const user = require('./routers/user.js')
const equipment = require('./routers/equipment.js')
const security = require('./routers/security')
const owner = require('./routers/owner.js')
const housing =require('./routers/housing.js')
const complaint =  require('./routers/complaint.js')
const repair =  require('./routers/repair.js')
const report = require('./routers/report.js')
const pay = require('./routers/pay.js')
const car = require('./routers/car.js')
const message = require('./routers/message.js')
const room = require('./routers/room.js')

const app = new Koa()
app.use(bodyParser())
app.use(cors());

let router = new Router()

router.use('/user', user.routes(),user.allowedMethods())
router.use('/equipment', equipment.routes(),equipment.allowedMethods())
router.use('/security',security.routes(),security.allowedMethods())
router.use('/owner', owner.routes(),owner.allowedMethods())
router.use('/housing', housing.routes(),housing.allowedMethods())
router.use('/complaint', complaint.routes(),complaint.allowedMethods())
router.use('/repair', repair.routes(),repair.allowedMethods())
router.use('/report', report.routes(),report.allowedMethods())
router.use('/pay', pay.routes(),pay.allowedMethods())
router.use('/car', car.routes(),car.allowedMethods())
router.use('/message', message.routes(),message.allowedMethods())
router.use('/room', room.routes(), room.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.use(static(
    path.join( __dirname,  './static')
))
app.listen(4000);