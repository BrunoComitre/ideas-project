// JavaScript WebSocket example
// websocket tutorial javascript server client
// https://github.com/daocaoren2008/websocket-learn
// https://dev.to/search?q=websocket%20tutorial%20javascript
// https://github.com/websockets/ws
// https://javascript.info/websocket
// https://github.com/ably-labs/websockets-cursor-sharing/blob/main/app/index.js

import WebSocket from 'ws';


const ws =  new WebSocket('ws://localhost:8002', {
    perMessageDeflate: false
});

ws.on('open', function open() {
    console.log("[OPEN] Connection Established");
    ws.send("Connection Established");
    console.log();
});

ws.on('message', function message(data) {
    console.log(`[MESSAGE] Data received from server: ${data}`);
    console.log('received: %s', data);
    console.log();
});

ws.on('ping',function pong(data) {
    alert("[PING] Ping");
    console.log(data);
    console.log();
});

ws.on('close', function close(event)  {
    if(event.wasClean) {
        console.log(`[CLOSE] Connection Closed Cleanly, code=${event.code} | reason=${event.reason}`);
        console.log();
    } else {
        // e.g server process killed or network down
        // event.code is usually 1006 in this case
        console.log(`[CLOSE] Connectiont Died on event: ${event}`);
        console.log();
    }
});
