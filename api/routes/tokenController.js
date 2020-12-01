const express = require('express');
const router = express.Router();


const modelo = require('../models/index.js');


//devuelve un token por id
router.get('/:id', (req, res, next) => {
    let idToken = req.params.id;
    modelo.token_usuario.findByPk(idToken)
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

//TODO: crea token 
router.post('/', (req, res, next) => {
    modelo.token_usuario.create(req.body)
        .then(item => res.json({ok: true, data: item}))
        .catch(err => res.json({ ok: false, error: err }));
});


//TODO: borra token
router.delete('/:id', (req, res, next) => {
    modelo.token_usuario.destroy({ where: { id: req.params.id } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});



module.exports = router;