import { WebSocketServer,WebSocket} from "ws";

interface User {
    socket:WebSocket,
    room:string,
}

const wss = new WebSocketServer({port:8080});

let users:User[] =[];
wss.on("connection",(socket)=>{
    
    
    socket.on("close",()=>{
        console.log("one user disconnected");
        
    })
    socket.on("message",(message)=>{
       const parsedMessage = JSON.parse(message.toString());
       if(parsedMessage.type === "join")
       {
        users.push({
            socket,
            room:parsedMessage.payload.roomId,
        })
       }

    })

});