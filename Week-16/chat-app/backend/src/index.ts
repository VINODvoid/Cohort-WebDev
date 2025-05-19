import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:3000});
wss.on("connection",(socket)=>{
    socket.onmessage = (event)=>{
        if(event.data ==="hi")
        {
            socket.send("hello");
        }
    }

});