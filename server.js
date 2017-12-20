const express = require('express')
const app = express()
var weather = require('weather-js');
var data;
weather.find({search: '40047', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
	data=result;
	console.log(JSON.stringify(result, null, 2))
});
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.get('/', function(req, res){
	res.render('index',{data: data});
})
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
})
