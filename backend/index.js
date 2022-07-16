const express = require("express"); 
const path = require("path")
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const MainRouter = require("../backend/routes/main")
const CompRouter = require("../backend/routes/components")
app.use("/", MainRouter)
app.use("/components", CompRouter)

app.use(express.static(path.join(__dirname, '../frontend'))); 
app.use(express.static(path.join(__dirname, '../frontend/style/src')));

app.set('views', 'frontend/views');

app.listen(3000, ()=> console.log("App Available now"));
