const accountModel = require('../models/accountModel');
const transferModel = require('../models/transferModel')

const createTransfer = async ({ remetenteCpf, destinatario, transferValue }) => {
    const contaRemetente = await accountModel.findAccount(remetenteCpf);
    const contaDestinatario = await accountModel.findAccount(destinatario)
    if (!contaRemetente) return { code: 409, message: 'Conta incorreta' };
    if (!contaDestinatario) return { code: 409, message: 'Destinatario nao existe'}
    const saldoRemetente = await accountModel.findSaldo(remetenteCpf)
    console.log(transferValue);
    if (Number(transferValue) > Number(saldoRemetente.saldo)) return { code: 409, message: 'Quantia nao disponivel'}
    const saldoDestinatario = await accountModel.findSaldo(destinatario);
    const remetenteNewSaldo = Number(saldoRemetente.saldo) - Number(transferValue);
    const destinatarioNewSaldo = Number(saldoDestinatario.saldo) + Number(transferValue);
    await accountModel.updateSaldo({ id: contaRemetente.id, value: remetenteNewSaldo})
    await accountModel.updateSaldo({ id: contaDestinatario.id, value: destinatarioNewSaldo})
    const result = await transferModel.createTransfer({remetente: contaRemetente.id, destinatario: contaDestinatario.id, transferValue})
    return result; 
   };
   

   module.exports = { createTransfer };  