const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.sequelize.sync();

app.get('/', (req,res)=>{
    res.json({message: "Welcome to the application"})
});

require("./routes/turorial.routes")(app);


const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

