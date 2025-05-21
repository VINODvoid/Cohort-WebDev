import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:3000});

let count = 1;
wss.on("connection",(socket)=>{
    count +=1;
    console.log("user "+count+" is connected");
    socket.on("message",(message)=>{
        console.log("message "+message.toString());
        socket.send(message.toString()+ " from server");
    })

});