const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/userRoutes');


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html

app.use("/user", userRoutes);
app.get('/', (req, res) => {
    res.status(200).sendFile()
})
app.listen(3000); //listens on port 3000 -> http://localhost:3000/