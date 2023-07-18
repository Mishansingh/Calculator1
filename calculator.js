const express =require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended : true}));



app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
  // console.log(req.body.num1);
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);

   var result=num1+num2;

    res.send("the result of calculation is "+ result);
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi= weight/ (height * height);

    res.send("your BMI is : " + bmi);

})
app.listen(3000,function(){
    console.log("server is live at 3000");
})