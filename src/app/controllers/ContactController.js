class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Sent from Contact Controller');
  }

  show() {
    // obter UM registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
// ^ Singleton: motivo de exportar usando o new; é um design pattern que
// diz que só deve existir uma instancia dos objetos na aplicacao
