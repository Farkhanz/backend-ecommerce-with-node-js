const express = require('express');
const { verifyToken } = require("../middleware");
const { checkError } = require('../helpers')

const handlers = require('../handlers/merchants')

const router = express.Router();

router.get('/', checkError(handlers.getAll));
router.post('/', checkError(handlers.create));
router.get('/:id', checkError(handlers.getById));
router.delete('/:id', verifyToken, checkError(handlers.remove));

module.exports = router;