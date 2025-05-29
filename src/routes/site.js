const express = require('express');
const router = express.Router();

const site = require('../app/controllers/Site');

router.get('/search', site.search);
router.get('/', site.index);

module.exports = router;
