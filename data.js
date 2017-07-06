const express = require('express');
const mustacheExpress = require('mustache-express');
//const robots = require('./robots.json');
const app = express();
const routes = require('./routes/routes.js')

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.use(routes);



app.listen(3000, function (){
  console.log("App is running on part 3000 successfully.")
});
