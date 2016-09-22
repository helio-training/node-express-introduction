const Express = require('express');
const app = Express();
const cors = require('cors');

//
app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');

// http://expressjs.com/en/resources/middleware/body-parser.html
app.use(require('body-parser').json());

//http://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

app.use(Express.static('public'));

// app.get('/', (request, response) => {
//   return response.send('Hello');
// });

const products = [
  {
    name: 'Sham-wow!!!',
    price: (3 * 19.99),
    description: 'SUPPPPPER absorbent'
  },
  {
    name: 'Magic Toilet Paper',
    price: 200,
    description: 'Wipes it clean'
  }];

app.get('/products', (request, response) => {
  return response.json(products);
  // return response.render('products', {
  //   products: products
  // });
});

app.get('/products/:name', (request, response) => {
  const name = request.params.name.toLowerCase();
  const product = products.filter(product => product.name.toLowerCase() === name)[0];
  console.log(product);
  return response.json(product);
});

app.put('/products/:name', (request, response) => {
  const name = request.params.name.toLowerCase();
  const updatedProduct = request.body;
  return response.json(updatedProduct);
});

app.del('/products/:name', (request, response) => {
  const name = request.params.name.toLowerCase();
  return response.json({
    ok: true
  });
});

app.post('/products', (request, response) => {
  const product = request.body;
  console.log(request);
  console.log(product);
  return response.json(product);
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


