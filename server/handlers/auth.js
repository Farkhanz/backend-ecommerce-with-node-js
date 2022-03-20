const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { models } = require('../../storage');

async function login(req, res) {
    const merchant = await models.merchant.findOne({
        where: {
            name: req.body.name
        }
    });
    if (!merchant) res.status(401).json({ error: "unauthorized" });

    const match = await bcrypt.compare(req.body.password, merchant.password);
    if (!match) return res.status(401).json({ error: "unauthorized" });

    const merchantId = merchant.id;
    const merchantName = merchant.name;
    const accessToken = jwt.sign({ merchantId, merchantName }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXIPRY || 900
    });
    const refreshToken = jwt.sign({ merchantId, merchantName }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXIPRY || 604800
    });

    await models.auth.upsert({ merchant_id: merchantId, refresh_token: refreshToken }, {
        where: {
            merchant_id: merchantId
        }
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: process.env.REFRESH_TOKEN_EXIPRY || 604800
    });
    res.json({ accessToken });
}


async function refreshAccessToken(req, res) {
    const { id, refreshToken } = req.body;
    if (!refreshToken || !id) return res.status(401).json({ error: "unauthorized" });
    var merchantAuth = await models.auth.findOne({
        where: {
            merchant_id: id,
            refresh_token: refreshToken
        }
    });
    if (!merchantAuth) return res.status(403).json({ error: "not allowed" });

    const merchant = await models.merchant.findOne({
        where: {
            id: id,
        }
    });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: "not allowed" });

        const merchantId = merchant.id;
        const merchantName = merchant.name;
        const accessToken = jwt.sign({ merchantId, merchantName }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        res.json({ accessToken });
    });
}

module.exports = {
    login,
    refreshAccessToken,
};