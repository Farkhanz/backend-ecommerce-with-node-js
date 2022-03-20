const express = require('express');
const { verifyToken } = require("../middleware");
const { checkError } = require('../helpers')
const handlers = require('../handlers/products')


const router = express.Router({ mergeParams: true });
router.post('/', verifyToken, checkError(handlers.create));
router.get('/', verifyToken, checkError(handlers.getAll));
router.get('/:id', verifyToken, checkError(handlers.getById));
router.put('/:id', verifyToken, checkError(handlers.update));
router.delete('/:id', verifyToken, checkError(handlers.remove));

module.exports = router;