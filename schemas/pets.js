// 宠物信息

var mongoose = require('mongoose');

var PetsSchema = new mongoose.Schema({
    "id": String,
    "uid": Number, // 发布人id
    "petName": String, // 宠物名
    "petAge": Number, // 宠物年龄
    "petType": Number, // 宠物类型
    "petDesc": Number, // 宠物简介
    "petAddress": String, // 宠物地址
    "creat": String,
    "status": Boolean // 状态
})

PetsSchema.statics = {
    fetch: function(cb) { //查询所有数据
        return this
          .find()
          .exec(cb) //回调
    },
    findById: function(id, cb) { //根据id查询单条数据
        return this
          .findOne({_id: id})
          .exec(cb)
    },
}
module.exports = PetsSchema