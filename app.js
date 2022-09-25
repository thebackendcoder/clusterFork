const cluster = require('cluster');
const express = require('express');
const os = require('os');

const app = express();

const numCpu = os.cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCpu; ++i) {
        cluster.fork();
    }
}
else {
    app.listen(3000, () => console.log(`Listening on the core of the CPU with proccess Id ${process.pid}`))
}


app.get("/", (req, res) => {
    for (let i = 0; i < 1e8; i++) {
        // sync operation to create a time delay
    }
    res.send('ok')
})

//app.listen(3000, () => console.log(`Listening on the core of the CPU with proccess Id ${process.pid}`));
