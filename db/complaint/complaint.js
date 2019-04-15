const {complaintModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            complaintModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new complaintModal(obj)
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
            complaintModal.update({_id: obj._id},{
              $set: {
                  name: obj.name,
                  content: obj.content,
                  date: obj.date,
                  result: obj.result,
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
            complaintModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()