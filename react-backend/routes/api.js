var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var api = require('./routes/api')
var router = express.Router();
var cors = require('cors')

var corsOption = {
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightcontinue": false,
    "optionsSuccessStatus": 204
  }


db.serialize(function(){ 
    
     db.run("CREATE TABLE user(username TEXT, password TEXT)")
     db.run("INSERT INTO user(username, password) VALUES('Cake', '125')"); 
     
    router.post('/login', function(req, res){
     passport.use(new LocalStrategy(function(username, password, done){
       db.get('SELECT * FROM user', function(err, row){
        if(!username || username.authenticate(password)){
          return done(null, false, {message: "Try again"})
          failureRedirect: '/'
        }    else({
              successRedirect: '/users'
            })
            return done(null, row);
       });
     }));
    });
      
    
    router.post('/register', cors(corsOption), function(req, res){
      passport.use(new LocalStrategy(function(username, password, done){
        db.post('INSERT INTO user(username, password) VALUES(username, password)');
        return done(null, row);
      }));
      });
      passport.serializeUser(function(user, done){
        return done(null, user.username);
      });
     
      passport.deserializeUser(function(obj, done){
        db.get('SELECT username FROM user WHERE username = ?', username, function(err, row){
         if (!row) return done(null, false);
         return done(null, obj);
        });
      });
     });
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var api = require('./routes/api')
var router = express.Router();
var cors = require('cors')

var corsOption = {
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightcontinue": false,
    "optionsSuccessStatus": 204
  }


db.serialize(function(){ 
    
     db.run("CREATE TABLE user(username TEXT, password TEXT)")
     db.run("INSERT INTO user(username, password) VALUES('Cake', '125')"); 
     
    router.post('/login', function(req, res){
     passport.use(new LocalStrategy(function(username, password, done){
       db.get('SELECT * FROM user', function(err, row){
        if(!username || username.authenticate(password)){
          return done(null, false, {message: "Try again"})
          failureRedirect: '/'
        }    else({
              successRedirect: '/users'
            })
            return done(null, row);
       });
     }));
    });
      
    
    router.post('/register', cors(corsOption), function(req, res){
      passport.use(new LocalStrategy(function(username, password, done){
        db.post('INSERT INTO user(username, password) VALUES(username, password)');
        return done(null, row);
      }));
      });
      passport.serializeUser(function(user, done){
        return done(null, user.username);
      });
     
      passport.deserializeUser(function(obj, done){
        db.get('SELECT username FROM user WHERE username = ?', username, function(err, row){
         if (!row) return done(null, false);
         return done(null, obj);
        });
      });
     });

      module.exports = router;
