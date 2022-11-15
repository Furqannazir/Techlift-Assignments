const express = require('express')
const { Pool } = require('pg')
const bodyParser = require('body-parser');
const pool = require('./dbconn')
const app = express()
const port = 3000
const UsersController = require('./controller')

const usersController = new UsersController()
// Configuring body parser middleware
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  
  app.get('/getall', usersController.getAll)
  
  app.post('/createTask', usersController.createTask)
  

// //get api to get all users information
// app.get('/', (req, res) => {
//     pool.query("Select * from public.CRUD",(error,result)=>{
    
//         if(error)
//         {
//             throw error
//         }
//             res.status(200).json(result.rows)
//     })    
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


