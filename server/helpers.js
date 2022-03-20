function getIdParam(req) {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function getMerchantIdParam(req) {
    const id = req.params.merchantId;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':merchantId' param: "${id}"`);
}

function checkError(handler) {
    return function (req, res, next) {
        handler(req, res).catch(next)
    };
}

module.exports = { getIdParam, getMerchantIdParam, checkError };