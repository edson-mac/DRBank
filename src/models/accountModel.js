const connection = require(`../models/connection`)
require('dotenv').config();

const dbName = process.env.DB_NAME;

const createAccount = async ({name, cpf}) => {
    await connection.execute(
      `INSERT INTO 
      ${dbName}.Account (name, cpf, saldo) VALUES (?, ?, ?);`,
      [name, cpf, 0],
  );
      return { code: 201, message: 'Conta criada com sucesso!' };
  };

  const findAccount = async (cpf) => {
    const [result] = await connection.execute(
      `SELECT * FROM ${dbName}.Account WHERE cpf = ?;`,
      [cpf],
      );
    return result[0];
  };

  const findSaldo = async (cpf) => {
    const [result] = await connection.execute(
      `SELECT saldo FROM ${dbName}.Account WHERE cpf = ?;`,
      [cpf],
      );
    return result[0];
  };

  const updateSaldo = async ({id, value}) => {
    const [result] = await connection.execute(
      `UPDATE ${dbName}.Account SET saldo = ? WHERE id = ?;`,
      [Number(value), Number(id)],
      );
    return result[0];
  };

  module.exports = { createAccount, findAccount, findSaldo, updateSaldo };