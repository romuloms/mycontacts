const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get(
  '/contacts',
  (request, response, next) => {    // - Middleware -
    request.appId = 'MeuAppId';
    // response.send('interceptado pelo middleware');
    next();
  },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

// o Express entende as rotas como se fossem middlewares, por isso o uso do app.use
// execucao do Express: Midd 1 -> Midd 2 -> Midd 3 -> ... -> Midd n (Route)

module.exports = router;
