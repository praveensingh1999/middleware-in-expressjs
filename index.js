const express =require('express');
const { request } = require('http');
const port = 3000;
const app =express(); // creating express server object

const mylogger = (req, res, next)=>{
    console.log("logging from middleware 1");
    next(); // call the next middleware
}

const exlogger = (req,res,next)=>{
    console.log("logging from the next middleware 2");
    return res.json({
        message:"done"
    })
    next();

}

app.get('/home',[mylogger,exlogger], (request,response)=>{
    console.log("last middleware");
    response.send("hi there, welcome to get");
    response.json({
        message: "OK get"
    })
});
app.post('/home', (request, response)=>{
    response.send("hi there, welcome to post");
    response.json({
        message: "ok"
    })
});

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})