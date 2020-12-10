// 用户信息

var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "age": Number,
    "gender": Number,
    "creat": String,
})

UsersSchema.statics = {
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

//暴露出去的方法
module.exports = UsersSchema