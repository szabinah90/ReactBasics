const express = require('express');
const exphbs = require('express-handlebars');
const basicApp = express();

basicApp.use(express.static('public'));

basicApp.engine('handlebars', exphbs({ defaultLayout: 'main' }));
basicApp.set('view engine', 'handlebars');

basicApp.get('/*', function (req, res, next) {
  res.render('index', {layout: false});
});

basicApp.listen(8000);
