const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts/', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

// o Express entende as rotas como se fossem middlewares, por isso o uso do app.use
// execucao do Express: Midd 1 -> Midd 2 -> Midd 3 -> ... -> Midd n (Route)

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.store);
router.delete('/categories/:id', CategoryController.delete);
router.put('/categories/:id', CategoryController.update);

module.exports = router;
