// 引入mongoose
var mongoose = require('mongoose')
mongoose.connect('mongodb://180.76.177.202:27017/strayPets', {
    useNewUrlParser: true,
    useUnifiedTopology: true     //这个即是报的警告
}) // 连接Mongodb数据库
var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});
 
module.exports = mongoose;