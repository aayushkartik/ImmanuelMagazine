const mongoose= require('mongoose');
const postSchema= new mongoose.Schema({
    title: String,
    body1: String,
    body2: String,
    body3: String,
    body4: String,
});
const article =  mongoose.model('Article',postSchema);
module.exports= article;