// CONFIGURATIONS

//Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// CORS
const cors = require('cors');
app.use(cors());

// Static Dir
app.use(express.static(__dirname + '/angular-anonnotes/dist'));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

// MODEL
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anonnotes');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const noteSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: [true, 'Cannot be blank'],
        minlength: [3, 'Comments must be at least 3 characters long']
    }
}, {
    timestamps: true
});
const Note = mongoose.model('Note', noteSchema);

//CONTROLLER
const noteController = {
    index: (request, response) => {
        Note.find({}).sort('-createdAt')
        .then(notes => response.json(notes))
        .catch(error => console.log(error));
    },
    create: (request, response) => {
        Note.create(request.body)
        .then(note => response.json(note))
        .catch(error => console.log(error));
    }
};

// ROUTES
app
.get('/notes', noteController.index)
.post('/notes', noteController.create)
.all("**", (request, response) => { response.sendFile(path.resolve("./public/dist/index.html")) });

// SERVER LISTENER
const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));