var http=require("http");

var fs=require("fs");

http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
fs.readFile("轮播.json","utf-8",function(err,data){
	if(err){
		throw err
	}
	res.end(data)
})
}).listen(8725,function(){
	console.log("启动成功");
})

//127.0.0.1:端口号
//localhost:端口号
//192.168.1.219：端口号
