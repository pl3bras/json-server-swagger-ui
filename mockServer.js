"use strict";

const jsonServer  = require('json-server');
const server      = jsonServer.create();
const router      = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors        = require('cors');
const port        = process.env.PORT || 3000;

server.use(middlewares);
server.use(cors());
server.use('/v2',router);
server.listen(port);
