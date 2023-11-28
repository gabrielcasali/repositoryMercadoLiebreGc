const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
//const fs = require('fs');
const path = require('path');
// Cargar el contenido de package.json
//const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));


app.get('/', (req,res)=>{
    res.sendfile(__dirname + './views/home.html');
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + './views/login.html');
})

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + './views/register.html');
})

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})