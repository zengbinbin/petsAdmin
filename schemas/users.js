var mongoose = require('mongoose');

//申明一个mongoons对象
var UsersSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "age": Number,
    "gender": Number,
    "creat": String,
})

//查询的静态方法
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