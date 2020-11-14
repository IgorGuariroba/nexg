const jwt    = require("express-jwt");
const secret = require("../config").secret;

function getTokenFromHeader(req){
    if(!req.headers.authorization) return null;
    const token = req.headers.authorization.split("");
    if(token[0] !== "Ecommerce") return null;
    return token[1];
}

const auth = {
    require: jwt({
        secret,
        userProperty: 'playload',
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret,
        userProperty: 'playload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

module.exports = auth;