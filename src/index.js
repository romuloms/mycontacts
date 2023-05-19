const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());  // permite que a API receba requisicoes com o body
// a ordem de implementacao importa. se a linha acima viesse depois o "app.use(routes)",
// não iria funcionar
app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
