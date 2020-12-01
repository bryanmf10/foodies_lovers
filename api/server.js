const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
const usersRouter = require('./routes/usersController');
const rankingRouter = require('./routes/rankingController');
const tupersRouter = require('./routes/tupersController');
const tokenRouter = require('./routes/tokenController');
const ofertasRouter = require('./routes/ofertasController');

const modelo = require('./models/index.js');

const app = express();
app.use(cors());

app.use(express.json());

//app.use("/img", express.static('uploads'));
// token validao: b1a14a69c88591d4888a0d3ada044c
app.use("/", function(req,res,next){
    let tokenWeb = req.query.token;
    if(tokenWeb !== null && tokenWeb !== undefined){
            modelo.token_usuario.findOne({where: {token:tokenWeb}})
                .then(user => {
                    req.body.id_usuario_token = (user.usuarios_id_usuarios);
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
app.use('/token', tokenRouter);
app.use('/ofertas', ofertasRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));
