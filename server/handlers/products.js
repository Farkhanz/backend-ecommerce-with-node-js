const { models } = require('../../storage');
const { getIdParam, getMerchantIdParam } = require('../helpers');

async function getAll(req, res) {
    const merchantId = getMerchantIdParam(req)
    const products = await models.product.findAll({
        where: {
            merchant_id: merchantId
        }
    });
    res.status(200).json(products);
};

async function getById(req, res) {
    const merchantId = getMerchantIdParam(req)
    const id = getIdParam(req);
    const product = await models.product.findOne({
        where: {
            id: id,
            merchant_id: merchantId
        }
    });
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).send('404 - Not found');
    }
};

async function create(req, res) {
    const { name, quantity, price } = req.body;
    const merchantId = getMerchantIdParam(req)
    if (req.body.id) {
        res.status(400).send({ error: "id should not be provided, since it is determined automatically by the database" })
    } else {
        await models.product.create({
            "name": name,
            "quantity": quantity,
            "price": price,
            "merchant_id": merchantId
        });
        res.status(201).json({ success: true })
    }
};

async function update(req, res) {
    const { name, quantity, price } = req.body;
    const merchantId = getMerchantIdParam(req)
    const id = getIdParam(req);

    await models.product.update({
        "name": name,
        "quantity": quantity,
        "price": price
    }, {
        where: {
            id: id,
            merchant_id: merchantId
        }
    });
    res.status(200).json({ success: true })
};

async function remove(req, res) {
    const merchantId = getMerchantIdParam(req)
    const id = getIdParam(req);
    await models.product.destroy({
        where: {
            id: id,
            merchant_id: merchantId
        }
    });
    res.status(200).json({ success: true })
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};