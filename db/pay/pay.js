const {payModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            payModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new payModal(obj)
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
            payModal.update({_id: obj._id},{
              $set: {
                room: obj.room,
                property: obj.property,
                car: obj.car,
                month: obj.month,
                date: obj.date,
              }
          }, (err,res) => {
              if(err){
                  reject(err)
              }
              resolve(res)
          })
      })
      }
  
      //删除
      remove(obj){
        return new Promise((resolve,reject) => {
            payModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    queryPay(obj){
        return new Promise((resolve,reject) => {
            payModal.find({room: obj.room}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()