const path = require('path');
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
const app = express();
connectToMongo();

//middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT);
})