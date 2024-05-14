const express = require('express');
const app = express();
const path = require('path');
const port = 80;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () =>{
    console.log(`App running on port ${port}`);
});