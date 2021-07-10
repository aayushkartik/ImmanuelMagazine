require('dotenv').config()
const express = require('express');
const bodyparser = require('body-parser');
const app= express();
const mongoose = require('mongoose');
const Subs = require(__dirname+'/Models/subscriber.model.js');
const article= require(__dirname+'/Models/article.model');
const quiz = require(__dirname+'/Models/quiz.model')
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
port = process.env.PORT || 8080;

const DB = process.env.DATABASE.replace('<PASSWORD>' , process.env.PASSWORD);
mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex',true);

app.get('/', function(req, res) {
    article.find({}, function(err, found){
        quiz.find({},function(err, found1){
            res.render('front',{article:found, quizzes:found1});
        });
    });
});
app.post('/subscribe',function(req, res){
    const subscription = new Subs({
        email: req.body.email,
    })
    subscription.save(function(){
        console.log(req.body.email);
        res.redirect('/');
    });
});
app.get('/article/:articleTitle', function (req, res) {
    const Title =  (req.params.articleTitle);
    article.find({},function(err, result){
        result.forEach(function(post){
            const stored= (post.title);
            if(stored === Title){
                res.render("post",{question:post.title, answer1:post.body1, answer2:post.body2, answer3:post.body3,answer4:post.body4});
            }
        });
    });
  });
app.listen(port, function(req, res) {
    console.log("listening on port 8080");
});
