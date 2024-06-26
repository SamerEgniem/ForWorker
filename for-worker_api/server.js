const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();//init the server

const db =require("./db/models")
const PORT = 3001;

db.sequelize.sync().then(()=>{

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}.`);
    });
});
/*var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ForWorker API." });
});

require("./routes/worker.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});*/