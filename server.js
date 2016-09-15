var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public/"));
app.get('/products', function(req, res){
    console.log("I received a GET request!");

    car1 = {
        name: "audi a4",
        price: "20000"
    };
    car2 = {
        name: "bmw 3 series",
        price: "23000"
    };
    car3 = {
        name: "mercedes-benz c-class",
        price: "25000"
    };
    var products = [car1, car2, car3];
    res.json(products);
});

app.listen(3000);
console.log('Server running on port 3000');