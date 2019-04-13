const {equipmentModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            equipmentModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new equipmentModal(obj)
        return new Promise((resolve,reject) => {
            m.save((err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    edit(obj){
        return new Promise((resolve,reject) => {
            equipmentModal.update({_id: obj._id},{
                $set: {
                    name: obj.name,
                    money: obj.money,
                    norms: obj.norms,
                    remarks: obj.remarks,
                }
            }, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    remove(obj){
        return new Promise((resolve,reject) => {
            equipmentModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()