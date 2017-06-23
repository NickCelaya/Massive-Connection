const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require("massive")
const controller = require("./controller")
const config = require("./config")



const app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + './../dist'));
// connects front end files


// const connectionString = "postgres://postgres:password@localhost/Sandbox" || example how to use without config.js


massive(config.connectionString).then( (dbInstance) => {  // dbInstance can be called anything.
  app.set("db", dbInstance);



//app.get("/test", (req, res) => {   //endpoint is commented out, it will create duplicates in the table
//dbInstance.new_plane().then()
//
// })

app.get("/getAllPlanes", controller.getPlanes); //endpoint


}); //end of massive / .then function I'm storing my endpoints in here.




const PORT = 3000
app.listen(PORT, function(){
  console.log("War on port:", PORT)
})
