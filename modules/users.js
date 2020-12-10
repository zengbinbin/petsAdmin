var mongoose = require('mongoose')

// 拿到导出的数据集模块
var UsersSchema = require('../schemas/users')

// 变异生成model模型
var Users = mongoose.model('Users', UsersSchema)

module.exports = Users