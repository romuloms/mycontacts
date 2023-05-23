const db = require('../../database/index');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    // orderBy -> ordenacao feita no Controller, usuario agora escolhe qual ordenacao por nome ele quer

    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({ name, email, phone, category_id }) {
    // OBS: Ataque de SQL Injection -> usuario consegue forcar erros direto no banco de dados
    // isso abre espaco para o usuario malicioso alterar a db
    // para evitar esse ataque se usa essa forma: VALUES($1, $2, $3, $4, etc) passando os valores
    // para o array que vem em sequencia
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, { name, email, phone, category_id }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ContactsRepository();
