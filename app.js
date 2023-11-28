const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;


app.get('/home', (req,res)=>{
    res.sendFile(__dirname + 'views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + 'views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + 'views/register.html');
});

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
const fs = require('fs');

// Cargar el contenido de package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
