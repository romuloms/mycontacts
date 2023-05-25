const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());  // permite que a API receba requisicoes com o body
// a ordem de implementacao importa. se a linha acima viesse depois o "app.use(routes)",
// não iria funcionar
app.use(routes);

// Error Handler Middleware (lembrar que a ordem de implementacao dele importa):
app.use((error, request, response, next) => {
  // esses 4 argumentos precisam ser passados e tem que ser nessa ordem
  console.log('### Error Handler ###');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
