const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
const usersRouter = require('./routes/usersController');
const rankingRouter = require('./routes/rankingController');
const tupersRouter = require('./routes/tupersController');
const ofertasRouter = require('./routes/ofertasController');
const accountRouter = require('./routes/accountController');

const modelo = require('./models/index.js');

const app = express();
app.use(cors());

app.use(express.json());

//app.use("/img", express.static('uploads'));
// token validao: b1a14a69c88591d4888a0d3ada044c
app.use("/account", accountRouter);
app.use("/", function(req,res,next){
    let tokenWeb = req.query.token;
    if(tokenWeb !== null && tokenWeb !== undefined && tokenWeb.trim().replace(/\s/g,'') !== ""){
            modelo.token_usuario.findOne({attributes: ['token','time', 'create_date', 'usuarios_id_usuarios'],where: {token:tokenWeb}})
                .then(data => data.get({ plain: true }))
                .then(user => {
                    let calculateTimeToken = (new Date(user.create_date)).getTime()+(user.time*60*1000);
                    let fechaActual = (new Date()).getTime();
                    if(fechaActual > calculateTimeToken){
                        modelo.token_usuario.destroy({ where: { usuarios_id_usuarios: user.usuarios_id_usuarios, token: user.token } })
                        .then(item => res.json({ ok: true, data: "Exito al borrar token." }))
                        .catch(err => res.json({ ok: false, error: "Error al borrar token." }));
                    }else{
                        req.body.id_usuario_token = user.usuarios_id_usuarios;
                    }
                    
                    next();
                })
                .catch(err => res.json({ ok: false, error: "Falta token" }));
    }else{
        res.json({ok: false, error:"Falta token"});
    }
});

app.use("/", express.static('public'));
app.use('/users', usersRouter);
app.use('/ranking', rankingRouter);
app.use('/tupers', tupersRouter);
app.use('/ofertas', ofertasRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));
