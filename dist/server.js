var express = require('express');
var app = express();
var marked = require('marked');
var fs = require('fs');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
app.use(history());
app.use(serveStatic(__dirname));
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});
app.use(express.static(__dirname + '/public',{maxAge:12*60*60*24*30}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var formate = require('./datetime.js');//格式化日期

/********************获取文章列表********************************/
app.get('/api/blog/posts',function(req,res){
	var posts = [];
  fs.readdir('./public/blog/posts',function(err,files){
		if(err){
			console.error(err);
		}
                files.filter(function(file) { return file.substr(-3) === '.md'; })
                .forEach(function(file) {
                  var datetime = fs.readFileSync('./public/blog/posts/Description/'+ file.substring(0, file.lastIndexOf(".")) + ".des", 'utf-8');
                  posts.push({'title':path.basename(file,'.md'),'datetime':datetime});
                });
		posts.sort(function(a,b){
			return Date.parse(b.datetime) - Date.parse(a.datetime)
		})
		for (var j = 0; j < posts.length; j++){
			posts[j].datetime = formate(posts[j].datetime)
		}
		res.send(posts);
	})
});
/********************获取文章列表********************************/
/********************获取文章详情********************************/
app.get('/api/blog/post/',function(req,res){
	var post = {'Mtime':'','content':''};
  fs.readFile('./public/blog/posts/'+req.query.file, 'utf-8', function (err, data) {
  	if (err) throw err;
	post.content = marked(data);
        var datetime = fs.readFileSync('./public/blog/posts/Description/'+ req.query.file.substring(0, req.query.file.lastIndexOf(".")) + ".des", 'utf-8');
        post.Mtime = formate(datetime);
        res.send(post);
  });
});
/********************获取文章详情********************************/
app.get('/',function(req,res){
	res.sendFile('/blog/index.html',{root: __dirname + '/public/'});
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
