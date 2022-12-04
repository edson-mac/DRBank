module.exports = async (req, res, next) => {
    const { deposito } = req.body;

    if (!deposito) return res.status(400).json({ message: '"deposito" is required' });

    if (!/^\d+$/.test(deposito)) return res.status(400).json({ message: 'O deposito deve conter apenas números' });

    next();
};