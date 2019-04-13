const {carModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            carModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new carModal(obj)
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
            carModal.update({_id: obj._id},{
                $set: {
                    parkingLog: obj.parkingLog,
                    licensePlate: obj.licensePlate,
                    model: obj.model,
                    name: obj.name,
                    room: obj.room,
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
            carModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()