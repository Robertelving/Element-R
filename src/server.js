const hapi = require("hapi");
const server = hapi.Server();

server.constructor({port: 8080, host: "localhost"});


