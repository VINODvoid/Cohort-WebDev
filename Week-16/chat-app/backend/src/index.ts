import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
    port:3000
})
wss.on("connection",(socket)=>{
    console.log("Connected to web socket");
    
    socket.send("hello")
    
})