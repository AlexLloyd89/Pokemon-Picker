//Requirements
var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "app", "public")));

//Route to files

//Route to files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});