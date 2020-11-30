const express = require('express');
const router = express.Router();


const modelo = require('../models/index.js');

//devuelve todas los Usuarios
router.get('/', (req, res, next) => {
    modelo.usuarios.findAll()
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

//devuelve un Usuarios
router.get('/:id', (req, res, next) => {
    let idUser = req.params.id;
    modelo.usuarios.findByPk(idUser)
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

//inserta un Usuarios
router.post('/', (req, res, next) => {
    modelo.usuarios.create(req.body)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

//modifica pass
router.put('/changepassword/:id', (req, res, next) => {
    modelo.usuarios.update({password: req.body.password},{where:{id:req.params.id}})
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});




module.exports = router;