const {messageModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            messageModal.find({}, (err, res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    add(obj){
        const m = new messageModal(obj)
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
        console.log(obj)
        return new Promise((resolve,reject) => {
            messageModal.update({_id: obj._id},{
              $set: {
                  name: obj.name,
                  room: obj.room,
                  back: obj.back,
                  content: obj.content,
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
      remove(obj){
        return new Promise((resolve,reject) => {
            messageModal.remove({_id: obj._id}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    queryUserMessage(obj){
        return new Promise((resolve,reject) => {
            messageModal.find({room: obj.room}, (err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()