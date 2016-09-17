const Express = require('express');
const app = Express();

app.use(Express.static('public'));

// app.get('/', (request, response) => {
//   return response.send('Hello');
// });

app.get('/products', (request, response) => {
  return response.send('My awesome products');
});


app.listen(3000, () => {
  console.log(`App has started.`);
});