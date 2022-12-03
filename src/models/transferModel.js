const connection = require(`../models/connection`)

const dbName = process.env.DB_NAME;

const createTransfer = async ({remetente, destinatario, transferValue}) => {
    await connection.execute(
      `INSERT INTO 
      ${dbName}.Transfers (remetente_id, destinatario_id, valor) VALUES (?, ?, ?);`,
      [remetente, destinatario, Number(transferValue)],
  );
      return { code: 201, message: `Transferencia no valor de ${transferValue} realizada com sucesso` };
  };

  module.exports = { createTransfer };