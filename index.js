var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 22331;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  if(path === '/'){  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./index.html')  
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else if(path === '/style.css'){   
    var string = fs.readFileSync('./style.css')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else if(path === '/main.js'){  
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  }else if(path === '/page1.json'){
    var string = fs.readFileSync('http://www.animepc.me/AJAX-demo/page1.json')
    response.setHeader('Content-Type', 'application/json')
    response.end(string)
  }else if(path === '/page2.json'){
    var string = fs.readFileSync('http://www.animepc.me/AJAX-demo/page2.json')
    response.setHeader('Content-Type', 'application/json')
    response.end(string)
  }else if(path === '/page3.json'){
    var string = fs.readFileSync('http://www.animepc.me/AJAX-demo/page3.json')
    response.setHeader('Content-Type', 'application/json')
    response.end(string)
  }else if(path === '/page4.json'){
    var string = fs.readFileSync('http://www.animepc.me/AJAX-demo/page4.json')
    response.setHeader('Content-Type', 'application/json')
    response.end(string)
  }else if(path === '/page5.json'){
    var string = fs.readFileSync('http://www.animepc.me/AJAX-demo/page5.json')
    response.setHeader('Content-Type', 'application/json')
    response.end(string)
  }else{  
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8') 
    response.end('找不到对应的路径，你需要自行修改 index.js')
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 22331 成功')
