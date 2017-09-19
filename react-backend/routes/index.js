var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
var cors = require('cors')
var app = express();
app.use(cors());
const sqlite = require('sqlite3').verbose()
var db = new sqlite.Database(':memory:')
app.use(passport.initialize());
app.use(passport.session());
var api = require('./routes/api')

var corsOption = {
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightcontinue": false,
  "optionsSuccessStatus": 204
}

app.get('/products/:id', cors(corsOption), function (req, res, next){
  res.json({msg: 'Sup!'})
})
app.listen(3002, cors(corsOption), function(){
  console.log("listening to port 3002")
  });

/* GET home page. */
router.get('/', cors(corsOption), function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 router.get('/.routes/api', cors(corsOption));





module.exports = router;
