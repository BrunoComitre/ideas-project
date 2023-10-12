import { WebSocketServer } from 'ws';


const wss = new WebSocketServer({
    port: 8002,
    perMessageDeflate: {
        zlibDeflateOptions: {
          // See zlib defaults.
          chunkSize: 1024,
          memLevel: 7,
          level: 3
        },
        zlibInflateOptions: {
          chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed if context takeover is disabled.
      }
    });
const clients =  new Map();

wss.on('connection', function connection(ws) {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
    const color = Math.floor(Math.random() * 16777215).toString(16);
    const metadata = {	id, color };

    console.log(`[ID]: ${id}`);
    console.log(`[COLOR]: ${color}`);
    console.log(`[METADATA]: ${metadata}`);
    console.log();

    clients.set(ws, metadata);
    
    ws.on('connection', function open() {
        console.log("[OPEN] Connection Established");
        console.log("Sending to Server");
        ws.send("My Name is Comitre");
        console.log();
    });


    ws.on('message', function incoming(event) {
        console.log(`[MESSAGE] Data received from server: ${event.data}`);
        console.log('receive :: ', event);
        const value = JSON.stringify(metadata);
        ws.send(value);
        console.log();
    });



    // ws.on('message', function messageAsStrign(event) {
    //     console.log(`[MESSAGE] Data received from server: ${event.data}`);
    //     console.log('receive :: ', event);
    //     console.log();

    //     const message = JSON.parse(event); // or event.data
    //     const metadata = clients.get(ws);

    //     console.log(`[message] : ${message}`);
    //     console.log(`[metadata] : ${metadata}`);
    //     console.log();
        
    //     message.sender = metadata.id;
    //     message.color = metadata.color;

    //     [...clients.keys()].forEach(client => {
    //         client.send(JSON.stringify(message));
    //     });
    // });

    ws.on('close', (event) => {
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

    ws.on('error', (error) => {
        console.log(`[ERROR] ${error.message}`);
        console.log();
    });

});

wss.on('close', () => {
    clients.clear();  // or clients.delete(ws)
    console.log('[CLOSE] Connectiont Died');
    console.log();
});

console.log('wss up')
