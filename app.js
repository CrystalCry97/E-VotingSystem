//importing modules
var express= require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors= require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route'); //call route.js

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/candidatelist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ port: 27017');
});
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in database connection');
    }
});

//port no
const port= 8080;

//adding middleware - cors
app.use(cors());

//body -parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//testing
app.get('/',(req,res)=>{
    res.send('Foobar');
});

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});