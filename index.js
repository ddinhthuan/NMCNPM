var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./view");

app.listen(3000);

app.get("/", function(request, response)  {
   
    response.render("homepage");
});

app.get("/test", function(request, response)  {
   
    response.render("testpage");
});

app.get("/login", function(request, response)  {
   
    response.render("loginpage");
});

app.get("/cart", function(request, response)  {
   
    response.render("cartpage");
});

app.get("/signup", function(request, response)  {
   
    response.render("register");
});
