const {reportModal} = require('../model.js')

class Mongodb{
    constructor(){

    }
    query(){
        return new Promise((resolve, reject) => {
            reportModal.find({}, (err, res) => {
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
}
module.exports = new Mongodb()