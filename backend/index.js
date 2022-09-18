const express = require("express"); 
const path = require("path")
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, "../frontend/")));
app.use(express.static(path.join(__dirname, "../frontend/comp")));

const MainRouter = require("../backend/routes/main")
const CompRouter = require("../backend/routes/components")
const ApiRouter = require("../backend/routes/api")
app.use("/", MainRouter)
app.use("/components", CompRouter)
app.use("/api", ApiRouter)

app.listen(process.env.PORT, ()=> console.log("App Available now"));