const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('access denied');
    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user =  verify;
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}