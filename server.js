<<<<<<< HEAD
const express = require("express")

let app = express()

app.use(express.json())

let port = 3000

let users = []
app.listen(port,(req,res)=>{
   
})

//create

app.post("/create",(req,res)=>{

    let body = req.body
    
    users.push(body)
    res.send("User saved successfully")

})

//get

app.get("/",(req,res)=>{
  
    res.send(users)   
})

//update

app.put("/update/:id",(req,res)=>{
   let {id} = req.params
   let {name} = req.body  

   let updatedUser = users.map((val)=>
    val.id === id ? {...val, name} : val
)
console.log(updatedUser)
 res.send(updatedUser)
})

//Delete

app.delete("/delete/:id",(req,res)=>{
    let {id} = req.params

    let userData = users.filter((val)=> val.id !==id)
    users = userData
    res.send(userData)

=======
let http = require("http")

let server = http.createServer((req,res)=>{
    console.log("Hello I m server")
    res.end("I am listening to you and server is running successfully")

})

server.listen(3000,()=>{
    console.log("Server is running")
>>>>>>> 611bf7093c0e3207b2493214dd1f4280c4531fa8
})