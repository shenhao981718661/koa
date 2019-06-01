const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//user表
var UserSchema = new Schema({
    userName: {type: String},
    password: {type: String},
    type: {type: Number},
    room: {type: String},
}, { collection: 'user' });
const UserModal = mongoose.model('user', UserSchema);

//设备表
var equiSchema = new Schema({
    name: {type: String},
    money: {type: Number},
    norms: {type: String},
    remarks: {type: String}
}, { collection: 'equipment' })
const equipmentModal = mongoose.model('equipment', equiSchema)

//保安信息表
var securitySchema = new Schema({
    name: {type: String},
    type: {type: String},
    region: {type: String},
    date: {type: String},
    remarks: {type: String}
}, { collection: 'security' })
const securityModal = mongoose.model('security', securitySchema)

//业主信息表
var ownerSchema = new Schema({
    name: {type: String},
    age: {type: String},
    sex: {type: String},
    room: {type: String},
    tel: {type: String},
    date: {type: Date},
    remarks: {type: String}
}, { collection: 'owner' })
const ownerModal = mongoose.model('owner', ownerSchema)

//住户信息表
var housingSchema = new Schema({
    name: {type: String},
    age: {type: String},
    sex: {type: String},
    room: {type: String},
    tel: {type: String},
    date: {type: String},
    remarks: {type: String}
}, { collection: 'housing' })
const housingModal = mongoose.model('housing', housingSchema)

//投诉表
var complaintSchema = new Schema({
    name: {type: String},
    content: {type: String},
    date: {type: String},
    result: {type: String},
}, { collection: 'complaint' })
const complaintModal = mongoose.model('complaint', complaintSchema)

//维修表
var repairSchema = new Schema({
    name: {type: String},
    content: {type: String},
    money: {type: String},
    date: {type: String},
}, { collection: 'repair' })
const repairModal = mongoose.model('repair', repairSchema)

//报修表
var reportSchema = new Schema({
    room: {type: String},
    name: {type: String},
    tel: {type: String},
    project: {type: String},
    explain: {type: String},
    statu: {type: Number},
}, { collection: 'report' })
const reportModal = mongoose.model('report', reportSchema)

//缴费表
var paySchema = new Schema({
    room: {type: String},
    property: {type: String},
    car: {type: String},
    month: {type: String},
    date: {type: String},
}, { collection: 'pay' })
const payModal = mongoose.model('pay', paySchema)

//车位表
var carSchema = new Schema({
    parkingLog: {type: String},
    licensePlate: {type: String},
    model: {type: String},
    room: {type: String},
    name: {type: String},
}, { collection: 'car' })
const carModal = mongoose.model('car', carSchema)

//留言表
var messageSchema = new Schema({
    content: {type: String},
    back: {type: String},
    date: {type: Date},
    room: {type: String},
    name: {type: String},
}, { collection: 'message' })
const messageModal = mongoose.model('message', messageSchema)

//房屋表
var roomSchema = new Schema({
    room: {type: String}
}, { collection: 'room' })
const roomModal = mongoose.model('room', roomSchema)
module.exports = {
    UserModal,
    equipmentModal,
    securityModal,
    ownerModal,
    housingModal,
    complaintModal,
    repairModal,
    reportModal,
    payModal,
    carModal,
    messageModal,
    roomModal,
};