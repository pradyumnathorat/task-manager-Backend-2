const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const dbconnect = require('./connection');
const port = 8000 || process.env.PORT;
dbconnect();
const loginRoute = require("./routes/loginResistraion");
const PostRoute = require("./routes/postroute");
const CategoryRoute = require("./routes/catagory")
const CheckToken = require('./helper/VerifyToken');
app.use(loginRoute);
app.use(CheckToken, PostRoute);
app.use(CheckToken, CategoryRoute);

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
})