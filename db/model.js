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
module.exports = {
    UserModal,
    equipmentModal,
    securityModal
};