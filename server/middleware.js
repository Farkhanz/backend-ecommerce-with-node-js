const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ error: "unauthorized" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        console.log(err)
        if (err) return res.status(401).json({ error: "unauthorized" });
        req.merchantName = decoded.merchantName;
        next();
    })
}


function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    console.log(err)
    res.status(500).json({
        error: "something wrong"
    })

}

module.exports = {
    verifyToken,
    errorHandler,
}