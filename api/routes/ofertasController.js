const express = require('express');
const router = express.Router();

const modelo = require('../models/index.js');

//devuelve todas los ofertas
router.get('/', (req, res, next) => {
    modelo.ofertas.findAll()
        .then(lista => res.json({ ok: true, resp: lista }))
        .catch(err => res.json({ ok: false, error: "No se encuentran las ofertas" }));
});

//devuelve un ofertas por id
router.get('/:id', (req, res, next) => {
    let idOfertas = req.params.id;
    modelo.ofertas.findByPk(idOfertas)
        .then(lista => res.json({ ok: true, resp: lista }))
        .catch(err => res.json({ ok: false, error: "No se encuentra la oferta" }));
});


//crea un oferta
router.post('/', (req, res, next) => {
    modelo.ofertas.create(req.body)
        .then(item => res.json({ ok: true, resp: item }))
        .catch(err => res.json({ ok: false, error: "No se puede subir la oferta" }));
});

//borra un oferta
router.delete('/:id', (req, res, next) => {
    modelo.ofertas.destroy({where:{id:req.params.id}})
        .then(item => res.json({ ok: true, resp: item }))
        .catch(err => res.json({ ok: false, error: "No se puede borrar la oferta" }));
});

//Cambia al estado final a aceptado
router.put('/change/:id', (req, res, next) => {
    modelo.ofertas.update({ respuesta: req.body.respuesta },{where:{id:req.params.id}})
        .then(item => res.json({ ok: true, resp: item }))
        .catch(err => res.json({ ok: false, error: "No se puede modificar la oferta" }));
});

//Cambia al estado final a aceptado con puntuacion y comentario.
router.put('/response/:id', (req, res, next) => {
    modelo.ofertas.update({ comentario_cambio: req.body.comentario, puntuacion: req.body.puntuacion, final_date: new Date() },{where:{id:req.params.id}})
        .then(item => res.json({ ok: true, resp: item }))
        .catch(err => res.json({ ok: false, error: "No se puede cambiar el estado" }));
});


module.exports = router;