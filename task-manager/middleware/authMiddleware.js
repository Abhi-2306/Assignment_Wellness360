module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer your-secure-token') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};
