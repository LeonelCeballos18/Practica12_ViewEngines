const express = require('express')
const app = express()
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function(req, res, next){
    console.log('Request Url:' + req.url);
    next();
})

app.get('/index', function(req, res){
  res.render('index');
})

app.get('/person/:id', function(req, res){
  res.render('person', { ID: req.params.id });
})

app.get('/api', function (req, res) {
    res.json({firstname: 'Jonh', lastname: 'Doe'});
  })

app.listen(port)