// 宠物类型

var mongoose = require('mongoose');

var PetsTypeSchema = new mongoose.Schema({
    "id": String,
    "petsType": String, // 宠物类型 key
    "petsValue": Number, // 宠物类型value
})

PetsTypeSchema.statics = {
    fetch: function(cb) { 
        return this
          .find()
          .exec(cb) 
    },
    findById: function(id, cb) { 
        return this
          .findOne({_id: id})
          .exec(cb)
    },
}
module.exports = PetsTypeSchema