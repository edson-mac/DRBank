module.exports = async (req, res, next) => {
    const { cpf, name } = req.body;

    const cpfDigits = 11;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    if (!cpf) return res.status(400).json({ message: '"cpf" is required' });

    if (cpf.length !== cpfDigits) return res.status(400).json({
        message: 'Cpf precisa ter 11 digitos'
    });

    if (!/^\d+$/.test(cpf)) return res.status(400).json({ message: 'Cpf deve conter apenas números' });

    next();
};