const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const multirooms = require('multirooms')
const Message = require("./models/message")

multirooms.setConfig(Message, 10,20)

io.on("connection", client => {

  client.on('userConnected', (location) => {
   multirooms.userConnected(client, location)
  })
  
  client.on('disconnect', () => {
    multirooms.disconnectUser(client)
  })

  client.on('pagination', (skip, room) => multirooms.sendPagination(client, skip, room));
  client.on('messages', (message, room) => multirooms.onMessageReceived(client, message, room))

})

http.listen(process.env.PORT || 3000, function () {
  console.log('Node app is running')
});
