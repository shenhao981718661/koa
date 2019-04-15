const {housingModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            housingModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new housingModal(obj)
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
            housingModal.update({_id: obj._id},{
              $set: {
                  name: obj.name,
                  age: obj.age,
                  sex: obj.sex,
                  room: obj.room,
                  tel: obj.tel,
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
  
      //删除
      remove(obj){
        return new Promise((resolve,reject) => {
            housingModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()