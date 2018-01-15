const express = require("express");
const hbs = require('hbs');             //handlebars package

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {    //helpers can take arguments
    return new Date().getFullYear();
});

app.get('/' , (req,res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page!!!",
        personName: "Mike"
    });
});

app.get('/about' , (req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page!'
    });
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
})