// Setup empty JS object to act as endpoint for all routes
let projectData = {}; 

//dependencies
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
// Start up an instance of app
const app = express();


//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({extended :false}));

app.use(express.json());

app.use(cors());


//intialize the main project folder
app.use(express.static('website'));

//Object to act as app endpoint


const port = 5000;

const server = app.listen(port, ()=>{
    console.log('server is running');
})

//Post route
app.post('/all' , (req, res)=>{
    console.log(req.body);
    projectData = req.body;
    res.send();
})

//Get route
app.get('/get' , (req , res)=>{
    res.send(projectData);
})


