'use strict';

const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'pug');



server.listen(3000, () => {
    console.log('#####' + new Date() + '##### port 3000');
});