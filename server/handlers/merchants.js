const { models } = require('../../storage');
const { getIdParam } = require('../helpers');
const bcrypt = require("bcrypt");

async function getAll(req, res) {
    const merchants = await models.merchant.findAll({
        attributes: ['id', 'name']
    });
    res.status(200).json(merchants);
};

async function getById(req, res) {
    const id = getIdParam(req);
    const merchant = await models.merchant.findOne({
        attributes: ['id', 'name'],
        where: {
            id: id
        }
    });
    if (merchant) {
        res.status(200).json(merchant);
    } else {
        res.status(404).send('404 - Not found');
    }
};

async function create(req, res) {
    const { name, address, phone_number, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    if (req.body.id) {
        res.status(400).json({ error: "id should not be provided, since it is determined automatically by the database" })
    } else {
        await models.merchant.create({
            password: hashedPassword,
            name: name,
            address: address,
            join_date: Date.now(),
            phone_number: phone_number
        });
        res.status(201).json({
            success: true
        });
    }
};


async function remove(req, res) {
    const id = getIdParam(req);
    await models.merchant.destroy({
        where: {
            id: id
        }
    });
    res.status(200).json({ status: success })
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
};