import { WebSocketServer,WebSocket} from "ws";

const wss = new WebSocketServer({port:8080});

let count = 1;
let users:WebSocket[] =[];
wss.on("connection",(socket)=>{
    users.push(socket);
    console.log("user "+count+" is connected");
    count +=1;
    socket.on("message",(message)=>{
        console.log("message "+message.toString());
        users.map((s)=>{
            s.send(message.toString()+ " from user "+count);
        })
    })

});