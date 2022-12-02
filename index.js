require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { loginRouter, accountRouter, transferRouter } = require(`./src/routers`);


const app = express()
app.use(bodyParser.json());
app.use('/login', loginRouter);
app.use('/account', accountRouter);
app.use('/transfer', transferRouter);
app.get('/ping', async (req, res) => {
  const ping = "ping";
  res.json(ping)
})

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
