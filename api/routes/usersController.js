const express = require('express');
const router = express.Router();


const modelo = require('../models/index.js');

//devuelve todas los Usuarios
router.get('/', (req, res, next) => {
    modelo.usuarios.findAll()
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

module.exports = router;