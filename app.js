//Usando un objeto de express
const express = require('express')
//App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000 //local host

//Path iniciar, repondera a la url localhost: 3000

app.get('/', (req, res) =>{
    res.send("¡Hello World!")
})

//Localhost:3000//launch
app.get('/launchx', (req, res) =>{
    res.send("Bienvenidos a launchx")
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name: 'Explorer', msg: 'Hello'}
    res.send(explorer)
})

//Query Params: Recibir parametros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName": "Kelvin"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example de app listening on port`)
})