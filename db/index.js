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
             call = {
               success: true,
               type: type
             }
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
           console.log(res)
         })
       })
       
    }
  }
  module.exports = new Mongodb()