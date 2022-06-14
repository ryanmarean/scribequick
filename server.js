const express = require('express');
const bodyParser = require('body-parser');
var connection = require ('express-myconnection');
var mysql = require('mysql2');

const app = express();

app.use(bodyParser.json());

app.use(
  connection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'scribequickdb'
  },'pool'));