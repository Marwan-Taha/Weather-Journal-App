//Global variables
const apiKey = '&appid=04f9797ec49488175265f879ff318b8b&units=metric';
const URL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


const getWeatherData = async (url,zip,key)=>{

    //GET Request
    const response = await fetch(url+zip+key);
    
        const data = await response.json();
        const temperature = data.main.temp;
        console.log(temperature);
    
    //User entered feelings    
    const feeling = document.getElementById('feelings').value;

    //POST Request
    await fetch('/all' , {
        method: 'POST',
        credentials: 'same-origin',
        headers : {
            'Content-Type' : 'application/json',            
        },
        body: JSON.stringify({
            temperature ,
            newDate,
            feeling,
        }),
    });


    //Updating UI
    const res = await fetch('/get') ;
    const data2 = await res.json();
    document.getElementById('date').innerHTML = `Date: ${data2.newDate}`;
    document.getElementById('Temperature').innerHTML = `Temperature is ${data2.temperature}&#8451;`;
    document.getElementById('enteredFeelings').innerHTML = `I feel: ${data2.feeling}`;
}

document.getElementById('generate').addEventListener('click' , ()=>{
    
    const zipCode = document.getElementById('zip').value;
    getWeatherData(URL , zipCode , apiKey)
})



