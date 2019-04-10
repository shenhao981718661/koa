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
                console.log(res)
                resolve(res)
            })
        })
    }
    add(obj){
        console.log(obj)
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
}
module.exports = new Mongodb()