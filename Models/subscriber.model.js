const mongoose = require('mongoose');
const SubscriberSchema = new mongoose.Schema({
    email: String,
});
const subscriber = mongoose.model('SubscribersMail',SubscriberSchema);
module.exports = subscriber;