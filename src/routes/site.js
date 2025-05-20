const express = require('express');
const router = express.Router();

const site = require('../app/controllers/Site');

router.use('/search', site.search);
router.use('/', site.index);

module.exports = router;
