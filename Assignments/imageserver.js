const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//image accessing by relative path 

app.get('/ironman', (req, res) => {
  let imagepath = path.join(__dirname, 'ironman.jpg');
  res.sendFile(imagepath)
})

//image accessing by the hardcoded path C:\Users\Admin\Desktop\Techlift-Furqan Node js\Package creating
 
app.get('/Image', (req, res) => {
  let imagepath = 'C:\\Users\\Admin\\Desktop\\Techlift-Furqan Node js\\Package creating\\ironman.jpg'
  res.sendFile(imagepath)
})


///getting the Image path from Browser input and rendering it on the Browser dynamically

app.get('/dynamicimage', (req, res) => {
  //let name=' Here is the query parameter'
  console.log(req.query.name) //to print the User input on webbrowser in the terminal
  //let imagepath = path.join(__dirname, 'ironman.jpg');
  //res.sendFile(imagepath)
  res.send(req.query.name) // to render the image on browser
})

//getting the Image path from Browser input and rendering it on the Browser dynamically

app.get('/dynamicimage1', (req, res) => {
  //let name=' Here is the query parameter'
  console.log(req.query.name)
  //let imagepath = path.join(__dirname, 'ironman.jpg');
  //res.sendFile(imagepath)
  res.sendFile(path.join(__dirname, req.query.name))
})


app.get('/conditionalimaging', (req, res) => {
  //let name=' Here is the query parameter'
  var Image;
  console.log(req.query)

  if (req.query.name=='abc.jpg'){
     Image=path.join(__dirname, req.query.name)
     console.log(Image)
  }
  if (req.query.name=='ironman.jpg'){
    Image=path.join(__dirname, req.query.name)
    console.log(Image)
  }
  else{
    console.log('Image Not Found')
    res.send('File not found')
  }

  //let imagepath = path.join(__dirname, 'ironman.jpg');
  //res.sendFile(imagepath)
  
})

//applying changes to understand the branch concept in Git so we create branch and push the new Changes 
//branch is for applying the sudden changes Without impacting the main branch 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




