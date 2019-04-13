const {securityModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            securityModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new securityModal(obj)
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
            securityModal.update({_id: obj._id},{
                $set: {
                    name: obj.name,
                    type: obj.type,
                    region: obj.region,
                    date: obj.date,
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
            securityModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()