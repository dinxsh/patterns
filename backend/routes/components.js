const express = require("express")
const router = express.Router()

router.get("/allcomp", (req,res)=>{
    res.render("../frontend/views/allcomp.html")
})

router.get("/button", (req,res)=>{
    res.render("../frontend/view/button.html")
})

router.get("/accordion", (req,res)=>{
    res.render("../frontend/view/accordion.html")
})

router.get("/carousel", (req,res)=>{
    res.render("../frontend/view/carousel.html")
})

router.get("/form", (req,res)=>{
    res.render("../frontend/view/form.html")
})

module.exports = router