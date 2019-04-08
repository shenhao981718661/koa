const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//user表
var UserSchema = new Schema({
    userName: {type: String},
    password: {type: String},
    type: {type: Number}
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
    date: {type: String},
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
module.exports = {
    UserModal,
    equipmentModal,
    securityModal,
    ownerModal,
    housingModal
};