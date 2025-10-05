import {WebSocketServer} from 'ws'


const port=8001
const wss=new WebSocketServer({port:port})

wss.on("connection",(socket)=>{

    console.log(`connected to ws ${port}`);

    socket.send("message",(e:any)=>{
        
        console.log(e);
        

    })
    
})