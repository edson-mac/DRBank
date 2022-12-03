const connection = require(`../models/connection`)
require('dotenv').config();

const dbName = process.env.MYSQL_DATABASE;

const createTransfer = async ({remetente, destinatario, transferValue}) => {
    await connection.execute(
      `INSERT INTO 
      ${dbName}.Transfers (remetente_id, destinatario_id, valor) VALUES (?, ?, ?);`,
      [remetente, destinatario, Number(transferValue)],
  );
      return { code: 201, message: `Transferencia no valor de ${transferValue} realizada com sucesso` };
  };

  module.exports = { createTransfer };