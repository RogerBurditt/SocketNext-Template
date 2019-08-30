const next = require('next');
const dev = process.env.NODE_ENV = 'production';
const nextApp = next({dev});
const port = parseInt(process.env.PORT, 10) || 3000;
const DataLoader = require('./server/DataLoader.js');

nextApp.prepare().then(() => {
  const app = require('express')();
  const server = require('http').Server(app);
  const io = require('socket.io')(server);
  const handle = nextApp.getRequestHandler();

  app.get('/', (req, res) => {
    return nextApp.render(req, res, '/index', req.query);
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
  });

  io.on("connect", socket =>{
      socket.emit("connected");
    
      // init server-only processes
      let dataLoader = new DataLoader(socket);
  });
});
