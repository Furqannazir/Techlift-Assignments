const express = require('express')
//const { Pool } = require('pg')
const bodyParser = require('body-parser');
const connect= require('./dbconnection')
const app = express()
const port = 3000

// Configuring body parser middleware
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    connect.query("Select * from public.accounts",(error,result)=>{
    
        if(error)
        {
            throw error
        }
            res.status(200).json(result.rows)
    })    
})

//post API 
app.post('/createuser', async(req, res) => {

    let result=await connect.query(`INSERT INTO public.users 
    (id , username , status)
    VALUES($1,$2,$3)
    `,[req.body.id,req.body.username,req.body.status])
    console.log('done')
    res.json("Status: Succcessfully ")

    })

    app.post('/updateuser', async(req, res) => {

        let result=await connect.query(`Update public.users SET username=$2 , status=$3  where id=$1`,[req.body.id,req.body.username,req.body.status])
        console.log('done')
        res.json("Status: Succcessfully ")
    
        })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


