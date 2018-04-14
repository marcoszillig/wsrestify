const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.listen(port, function() {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o server: ctrl + C')
})
