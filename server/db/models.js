const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://brit:assessment@database.rqthe.mongodb.net/database?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


module.exports = mongoose.model('User', userSchema);

