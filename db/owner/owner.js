const {ownerModal} = require('../model.js')
const db = require('../index.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            ownerModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new ownerModal(obj)
        return new Promise((resolve,reject) => {
            m.save((err,res) => {
                if(err){
                    reject(err);
                }
                db.save({userName: obj.tel, password: obj.tel, type: 1, room: obj.room})
                resolve(res)
            })
        })
    }
    edit(obj){
        return new Promise((resolve,reject) => {
            ownerModal.update({_id: obj._id},{
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
            ownerModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    queryUserInfo(obj){
        console.log(obj)
        return new Promise((resolve,reject) => {
            ownerModal.find({room: obj.room}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(...res)
            })
        })
    }
}
module.exports = new Mongodb()