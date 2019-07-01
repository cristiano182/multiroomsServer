const app = require('express')()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser')
const cors = require('cors')
const multirooms = require('multirooms')

require('dotenv/config');
require('./config/db')

const Message = require("./models/message")

multirooms.setConfig(Message, 10,20)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(require('./routes/auth'))
app.use(require('./routes/home'))

io.on("connection", client => {

  client.on('userConnected', (location) => {
   multirooms.userConnected(client, location)
  })
  
  client.on('disconnect', () => {
    multirooms.disconnectUser(client)
  });
  client.on('pagination', (skip, room) => multirooms.sendPagination(client, skip, room));
  client.on('messages', (message, room) => multirooms.onMessageReceived(client, message, room))
})
http.listen(process.env.PORT || 3000, function () {
  console.log('Node app is running')
});
