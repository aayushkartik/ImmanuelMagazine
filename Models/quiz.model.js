const mongoose= require('mongoose');
const quizSchema= new mongoose.Schema({
    title: String,
    Opt1: String,
    Opt2: String,
    Opt3: String,
    Opt4: String,
    Answer: String,
});
const quiz = mongoose.model('Quiz',quizSchema);
module.exports= quiz;