import {WebSocketServer} from "ws"

const wss = new WebSocketServer({port:3000});


wss.on("connection",(socket)=>{
    console.log("User connnected");

    // setInterval(() => {
    //     socket.send("Current price of solana is"+ (Math.random())*100);
    // }, 5000);
    socket.on("message",(e)=>{
        if(e.toString() === "ping")
        {
            socket.send("pong");
        }
    })
})

