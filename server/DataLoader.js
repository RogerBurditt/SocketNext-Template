const fetch = require('node-fetch');
const fs = require('fs');

module.exports = class DataLoader{
  constructor(socket){
    this.socket = socket;

    this.socket.on("LOAD_DATA", data => {
      // Do a load data thing here
      // console.log(>> Load request received.);
    });
  }
}
