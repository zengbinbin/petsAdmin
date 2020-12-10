var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

var mongoose = require('mongoose');//导入mongoose模块

var Pets = require('../modules/pets');//导入模型数据模块

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 查询所有宠物列表
router.get('/list', function(req, res, next) {
    Pets.find({},function(err, users) {
    if(err) {
      res.send({status:201, errMsg:'网络错误'})
    }
    res.send({status:200,data:users})
  })
});

// 增加宠物信息
router.post('/add', async function(req, res) {
  const userInfo = {
    id: Date.now(),
    uid: req.body.uid,
    petName: req.body.petName,
    petType: req.body.petType,
    petAge: req.body.petAge,
    petDesc: req.body.petDesc,
    petAddress: req.body.petAddress,
    status: req.body.status,
    creat: Date.now(),

  }
  const data = await Pets.create(userInfo)
  res.send(data)
});
module.exports = router;
