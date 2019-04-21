const {UserModal} = require('./model.js')

class Mongodb {
    constructor () {
  
    }
  // 查询
    query ({userName,password,type}) {
       return new Promise((resolve, reject) => {
        UserModal.find({'userName': userName,'password': password,'type': type}, (err, res) => {
           let call = {}
           if(err) {
             reject(err)
           }
           if(res.length != 0){
             call = Object.assign({
               success: true,
               type: type
             },...res)
           } else{
             call = {
               success: false,
               message: '无此用户'
             }
           }
           resolve(call)
         })
       })
    }
  // 保存
    save (obj) {
       const m = new UserModal(obj)
       return new Promise((resolve, reject)=> {
         m.save((err, res) => {
           if (err) {
             reject(err)
           }
           resolve(res)
         })
       })
    }

    //修改
    edit(obj){
      return new Promise((resolve,reject) => {
        UserModal.update({_id: obj._id},{
            $set: {
                userName: obj.userName,
                password: obj.password,
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
        UserModal.remove({_id: obj._id}, (err,res) => {
              if(err){
                  reject(err)
              }
              resolve(res)
          })
      })
  }
  changepassword(obj){
    return new Promise((resolve,reject) => {
      UserModal.update({_id: obj._id},{
          $set: {
              // userName: obj.userName,
              password: obj.password,
          }
      }, (err,res) => {
          if(err){
              reject(err)
          }
          resolve(res)
      })
  })
  }
  }
  module.exports = new Mongodb()