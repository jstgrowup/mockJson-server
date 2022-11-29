const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000
server.post("/",(req, res) =>{
  res.send("successfull")
})
server.put("/",(req, res) =>{
  res.send("successfull")
})
server.delete("/",(req, res) =>{
  res.send("successfull")
})
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
