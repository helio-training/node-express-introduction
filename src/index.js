const Express = require('express');
const app = Express();

//
// app.engine('html', require('ejs').renderFile);

app.use(Express.static('public'));

// app.get('/', (request, response) => {
//   return response.send('Hello');
// });

// app.get('/products', (request, response) => {
//   return response.send('My awesome products');
// });


app.get('/sports/:sport/qb/top-rated', (request, response) => {
  const sport = request.params.sport;
  console.log(request.params);
  return response.send(`${sport}: Top Rated QB's`);
});


app.listen(3000, () => {
  console.log(`App has started.`);
});