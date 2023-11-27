const express = require ('express');

const path = require ('path') ;

const app = express();

app.use(express.static('public'));
// Levantando el servidor en el puerto 3000
app.listen(3001, ()=>{
    console.log("servidor corriendo en puerto 3001")
});
app.get('/',(req,res) => {
    res.sendfile((require('path')).resolve('./views/home.html'))
});
app.get('/register',(req, res)=>{
    res.sendFile(__dirname + '/views/register.html')
});
app.get('/login',(req, res) =>{
    res.sendFile(__dirname+'/views/login.html')
});
app.post('')