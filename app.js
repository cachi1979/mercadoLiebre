const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.get('/',(request,response)=> {
    response.send('hola mundo')
})

app.get('/home', (request,response)=>{
    response.sendFile(path.join(__dirname,'views/home.html'))
})

 

app.listen(process.env.PORT || 3000, function() { 
    console.log('Servido corriendo en corriendo en el puerto 3000'); 
})

app.use (express.static('public'))      