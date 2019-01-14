const io = require('socket.io-client')

const socket = io('http://localhost:5500/')

socket.emit('path',{
    path:"/",
    auth:"pass"
})
socket.on('/.a.s.d',(d) => {
    console.log(d)
})
