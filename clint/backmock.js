var express = require('express');

var app = express();
var router = express.Router();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


router.get('/api/list', (req, res, next) => {
  res.json({
    code: 0,
    data: {
      currentPage: 1,
      total: 29,
      list: [
        {
          id: 1000018,
          source: 'http://14.14.14.14/asfjdsfal.mp3',
          authorId: 1099,
          authorName: '赵四'
        },
        {
          id: 1000055,
          source: 'http://14.14.14.14/asfj234al.mp3',
          authorId: 100032,
          authorName: '赵四2'
        }
      ]
    }
  })
})

app.use('/', router);

app.listen(3030)