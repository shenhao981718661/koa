const {roomModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            roomModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new reportModal(obj)
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
            reportModal.update({_id: obj._id},{
              $set: {
                room: obj.room,
                name: obj.name,
                tel: obj.tel,
                project: obj.project,
                explain: obj.explain,
                date: obj.date,
                statu: obj.statu,
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
            roomModal.remove({room: obj.room}, (err,res) => {
                if(err){

                    reject(err)
                }
                resolve(res)
            })
        })
    }
    queryreport(obj){
        return new Promise((resolve,reject) => {
            reportModal.find({room: obj.room}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()