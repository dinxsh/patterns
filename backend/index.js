const express = require("express"); 
const path = require("path")

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const MainRouter = require("../backend/routes/main")
const CompRouter = require("../backend/routes/components")
app.use("/", MainRouter)
app.use("/components", CompRouter)

app.use(express.static(path.join(__dirname)));
app.use(express.static('../frontend'));

app.listen(process.env.PORT, ()=> console.log("App Available now"));
