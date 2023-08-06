// app.js is our server which sends the requests

const express= require("express");                       // adding express package
const bodyParser= require("body-parser");                // adding bodyparser package




const app= express();                                    // creating our app


const newListItem=[];

app.set('view engine', 'ejs');                          // the view engine will look for the files to render in the views folder
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static("public"));
 
app.get("/", function(req,res){                          // creating the first get route on the home route
    
var today= new Date();


var options={
    weekday: "long",
    day: "numeric",
    month: "long"
};

var day= today.toLocaleDateString("en-US", options);



res.render("list",{
    kindOfDay:day,
    newListItem:newListItem
}); 


});
// we write app.post to handle post request that goes to a particular route
// the route in this case is the home route
// and when that happens we grab that value that is in the (input)text box 
 app.post("/",function(req,res){
    newListItem.push(req.body.newItem);
    res.redirect("/");
 });
 

app.listen(3000, function(){                             // listening on port 3000
    console.log("server started on port 3000");
});