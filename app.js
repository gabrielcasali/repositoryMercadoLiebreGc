const express = require ('express');

const path = require ('path') ;

const app = express();

app.use(express.static('public'));
// Levantando el servidor en el puerto 3000
app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto 3000")
});
app.get('/',(req,res) => {
    res.sendfile((require('path')).resolve('./views/home.html'))
});
