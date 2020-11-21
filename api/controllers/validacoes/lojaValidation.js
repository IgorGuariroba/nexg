const mogoose =  require("mongoose");
const { rawListeners } = require("../../models/loja");

const Usuario =  mogoose.model("Usuario");
const Loja = mogoose.model("Loja");


module.exports = (req, res, next) => {
    if(!req.payload.id) return res.sendStatus(401);
    Usuario.findById(req.playload.id).then(usuario => {
        if(!usuario) return res.sendStatus(401);
        if(!usuario.loja) return res.sendStatus(401);
        if(!usuario.permissao.includes("admin")) return res.sendStatus(401);
        if(!usuario.loja !== loja) return res.sendStatus(401);
        next();
    }).catch(next);
}