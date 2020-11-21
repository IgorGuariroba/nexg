const mongoose = require("mongoose");
const uniqueValidator   = require('mongoose-unique-validator');


const LojaSchema = mongoose.Schema({
    nome: {type: String, required: true},
    cnpj: {type: String, required: true, unuque: true},
    email: {type: String},
    telefones: {
        type: [{type: String}]
    },
    endereco: {
        type:{
            location: {type: String, required: true},
            numero: {type: String, required: true},
            complemento: {type: String},
            bairro: {type: String, required: true},
            cidade: {type: String, required: true},
            CEP: {type: String, required: true}
        },
        required: true
    }

},{timestamps: true});

LojaSchema.plugin(uniqueValidator, { message: "já está sendo utilizado" });


module.exports = mongoose.model("Loja",LojaSchema);