const mongoose = require('mongoose')
const db = require('../db');
const Schema = mongoose.Schema;
const {UserModal} = require('../model.js')

class Mongodb {
    constructor () {
  
    }
  // 查询
    query () {
       return new Promise((resolve, reject) => {
        UserModal.find({'type':2},{userName:1,type:1}, (err, res) => {
           let call = {}
           if(err) {
             reject(err)
           }
           console.log(res)
           resolve(res)
         })
       })
    }
  // 保存
    save (obj) {
       const m = new MyModel(obj)
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