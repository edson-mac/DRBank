module.exports = async (req, res, next) => {
    const { destinatario, transferValue } = req.body;

    const transferLimit = 2000;

    if (!destinatario) return res.status(400).json({ message: '"destinatario" is required' });

    if (!transferValue) return res.status(400).json({ message: '"transferValue" is required' });

    if (!/^\d+$/.test(transferValue)) return res.status(400).json({ message: 'TransferValue deve conter apenas números' });

    if (Number(transferValue) > transferLimit) return res.status(400).json({
        message: 'Transferência acima do limite de R$ 2000'
    });

    next();
};