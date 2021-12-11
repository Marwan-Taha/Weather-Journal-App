//dependencies
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
// Start up an instance of app
const app = express();

app.use(bodyParser.urlencoded({extended :false}));

app.use(express.json());

app.use(cors());


//intialize the main project folder
app.use(express.static('website'));


let projectData = {}; 

const port = 5000;

const server = app.listen(port, ()=>{
    console.log('server is running');
})


app.post('/all' , (req, res)=>{
    console.log(req.body);
    projectData = req.body;
    res.send();
})

app.get('/get' , (req , res)=>{
    res.send(projectData);
})


