const express = require('express');
const router = express.Router();


const modelo = require('../models/index.js');

//devuelve todas los tupers
router.get('/', (req, res, next) => {
    modelo.tupers.findAll()
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

//devuelve un tuper por id
router.get('/:id', (req, res, next) => {
    let idTupers = req.params.id;
    modelo.tupers.findByPk(idTupers)
        .then(lista => res.json(lista))
        .catch(err => res.json({ ok: false, error: err }));
});

//crea tupper
router.post('/', (req, res, next) => {
    modelo.tupers.create(req.body)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

//modifica tupper
router.put('/:id', (req, res, next) => {
    modelo.tupers.update({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        urlFoto: req.body.urlFoto,
        longitud: req.body.longitud,
        latitud: req.body.latitud,
        vegan: req.body.vegan,
        vegetarian: req.body.vegetarian,
        hasFrutosSecos: req.body.hasFrutosSecos,
        hasLactosa: req.body.hasLactosa,
        hasGluten: req.body.hasGluten,
        valor_tamano: req.body.valor_tamaño,
        ingredientes: req.body.ingredientes
    }, { where: { id: req.params.id } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


//borra tupper
router.delete('/:id', (req, res, next) => {
    modelo.tupers.destroy({ where: { id: req.params.id } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


//filtra tupper
// router.get('/:id', (req, res, next) => {
//     modelo.tupers.filter({ where: { id: req.params.id } })
//         .then(data => res.json(data))
//         .catch(err => res.json({ ok: false, error: err }));
// });


module.exports = router;