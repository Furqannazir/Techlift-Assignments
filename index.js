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

//get api to get all users information
app.get('/getuser', (req, res) => {
    connect.query("Select * from public.CRUD",(error,result)=>{
    
        if(error)
        {
            throw error
        }
            res.status(200).json(result.rows)
    })    
})

//put API to create a new userin the database
app.put('/createuser', async(req, res) => {

    let result=await connect.query
    (`INSERT INTO public.crud(id , username , status) VALUES($1,$2,$3)
    `,[req.body.id,req.body.username,req.body.status])
    console.log('done')
    res.json("Status: Succcessfully Created ")

    })

    //put api to update a user in the database
    app.put('/updateuser', async(req, res) => {

        let result=await connect.query(`Update public.crud SET username=$2 , status=$3  where id=$1`,
        [req.body.id,req.body.username,req.body.status])
        console.log('done')
        res.json("Status: Succcessfully Updated ")
    
        })

        //delete api to delete a user in the database

        app.delete('/deleteuser', async(req, res) => {

            let result=await connect.query(`DELETE FROM crud WHERE id=$1;
            `,
            [req.body.id])
            console.log('done')
            res.json("Status: Succcessfully Deleted ")
        
            })

            //get api to get one user information by query
app.get('/getoneuser', (req, res) => {
    connect.query("Select * from public.crud LIMIT 1",(error,result)=>{
    
        if(error)
        {
            throw error
        }
            res.status(200).json(result.rows)
    })    
})


// Display a single user by ID
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    //const id = "Furqan";
    
   console.log(id)
 
    connect.query('SELECT * FROM crud WHERE id = $1 ', [id], (error, result) => {
        if (error) throw error;

        res.status(200).json(result.rows)
 
        //res.send(id);
    });
});

       //get api to get count of users 
       app.get('/getcountofusers', (req, res) => {
        connect.query("Select Count(*) from public.crud ",(error,result)=>{
        
            if(error)
            {
                throw error
            }
                res.status(200).json(result.rows)
        })    
    })

     //get api to get count of Active information by query
     app.get('/getcountofactive', (req, res) => {
        connect.query("Select Count(*) from public.crud Where status='Active'",(error,result)=>{
        
            if(error)
            {
                throw error
            }
                res.status(200).json(result.rows)
        })    
    })

    //get api to get count of Active information by query
    app.get('/getcountofall', (req, res) => {
        connect.query(
            "Select Count(*) from public.crud UNION ALL Select Count(status) from public.crud Where status='Active' UNION ALL Select Count(status) from public.crud Where status='Inactive'"
            ,(error,result)=>{
        
            if(error)
            {
                throw error
            }
                res.status(200).json(result.rows)
        })    
    })

    //get api to get count of Active,total and inactive together  

    app.get('/getcountall', (req, res) => {
      const result=  connect.query(
            "SELECT * FROM ( SELECT COUNT(*) FROM crud UNION ALL SELECT COUNT(*) FROM crud group by status ) s"
            ,(error,result)=>{
        
            if(error)
            {
                throw error
            }
          //  const jsonString = JSON.stringify(result.rows);

            //res.send(result.rows)
             res.status(200).json(result.rows[0])
               
            })    
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


