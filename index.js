require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { loginRouter, accountRouter, transferRouter } = require(`./src/routers`);
const connection = require(`./src/models/connection`);
require('dotenv').config();

const dbName = process.env.DB_NAME;


const app = express()
app.use(bodyParser.json());
app.use('/login', loginRouter);
app.use('/account', accountRouter);
app.use('/transfer', transferRouter);
app.get('/ping', async (req, res) => {
  const ping = await connection.execute(`SELECT * FROM ${dbName}.Account;`);
  res.json(ping)
})

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
