var mongoose = require('mongoose')

// 拿到导出的数据集模块
var PetsSchema = require('../schemas/pets')

// 变异生成model模型
var Pets = mongoose.model('Pets', PetsSchema)

module.exports = Pets