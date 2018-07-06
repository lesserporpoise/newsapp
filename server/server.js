require('dotenv').config();

const express     = require('express');
const bodyParser  = require('body-parser');
const port        = 3501;
const app         = express();
const baseUrl     = "/api/scores";
const controllers = require(__dirname + '/controllers/controllers.js')



app.use    (bodyParser.json());
app.listen (port,()=>console.log("Playing Wubstep on port:"+port))
app.get    (baseUrl, controllers.read)
app.post   (baseUrl,controllers.create)
app.put    (baseUrl+"/:ID",controllers.update)
app.delete (baseUrl+"/:ID",controllers.delete)