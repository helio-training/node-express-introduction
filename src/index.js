const Express = require('express');
const app = Express();



//
// app.engine('html', require('ejs').renderFile);
// app.set('views', './views');
// app.set('view engine', 'ejs');

// http://expressjs.com/en/resources/middleware/body-parser.html
app.use(require('body-parser').json());
app.use(require('cors'));

app.use(Express.static('public'));

// app.get('/', (request, response) => {
//   return response.send('Hello');
// });

app.get('/products', (request, response) => {
  const products = {
    name: 'Sham-wow!!!',
      price: (3 * 19.99),
      description: 'SUPPPPPER absorbent'
  };

  return response.render('products', {
    products: products
  });
});


app.get('/sports/:sport/:position/top-rated', (request, response) => {
  const sport = request.params.sport;
  const position = request.params.position;

  console.log(request.params);
  return response.send(`${sport}: Top Rated QB's`);
});


app.listen(3000, () => {
  console.log(`App has started.`);
});