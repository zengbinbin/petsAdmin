var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

var mongoose = require('mongoose');//导入mongoose模块

var Users = require('../modules/users');//导入模型数据模块

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 查询所有用户数据
router.get('/list', function(req, res, next) {
  Users.find({},function(err, users) {
    if(err) {
      res.send({status:201, errMsg:'网络错误'})
    }
    res.send({status:200,data:users})
  })
});

// 增加用户
router.post('/add', async function(req, res) {
  const userInfo = {
    id: Date.now(),
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    creat: Date.now(),
  }
  const data = await Users.create(userInfo)
  res.send(data)
});
module.exports = router;
