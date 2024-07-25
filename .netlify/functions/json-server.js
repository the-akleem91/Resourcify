const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../data/db.json') 
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const handler = (event, context) => {
  return new Promise((resolve, reject) => {
    server.handle(event, {}, (err, res) => {
      if (err) {
        return reject({
          statusCode: 500,
          body: JSON.stringify({ error: 'Server Error' }),
        })
      }

      resolve({
        statusCode: res.statusCode,
        body: res.body,
        headers: res.headers,
      })
    })
  })
}

module.exports.handler = handler
