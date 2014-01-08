
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var http = require('http');
 var path = require('path');
 var config=require('./config.js');
 var ejs=require('ejs');

 var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

<% if (hasEjs){ %>
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
<% } else { %>
app.set('view engine', 'jade');
<% } %>


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server "<%= appName %>" listening on port ' + app.get('port'));
});


var RestfulMongo=require('restful-mongo')
var restfulMongo=new RestfulMongo({
	url: config.db.url
})
restfulMongo.configure(app)	



	
