let http = require("http")

let server = http.createServer((req,res)=>{
    console.log("Hello I m server")
    res.end("I am listening to you and server is running successfully")

})

server.listen(3000,()=>{
    console.log("Server is running")
})