const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
//const fs = require('fs');

// Cargar el contenido de package.json
//const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));


app.get('/', (req,res)=>{
    res.sendfile(path.resolve + './views/home.html');
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve + './views/login.html');
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve + './views/register.html');
})

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})