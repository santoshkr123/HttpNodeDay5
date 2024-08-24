const http = require("http") 
const server = http.createServer((req,res)=>{
   res.end("hell world")
})
server.listen(1603)