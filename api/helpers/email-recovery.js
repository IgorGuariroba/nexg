const transporter = require("nodemailer").createTransport(require("../config/email"));
const {api: link } = require("../config/index");

module.exports = ({usuario, recovery }, cb)=> {
    const message = `
    <h1 style="text-aling: center;">Recuperacao de Senha</h1>
    <br/>
    <p>
    <a href="${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}">
       ${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token} 
    </a>
    <br/><br/><hr/>
    <p>
        Obs.: Se você não solicitou a redefinicao, apenas ignore esse email.
    </p>
    <br/>
    <p>Atenciosamente, Loja Compre aqui</p>
    `;
    const opcoesEmail ={
        from: "naoresponder@lojacompreaqui.com",
        to: usuario.email,
        subject: "Redefinicao de Senha - Loja Compre aqui",
        html: message
    };

    if(process.env.NODE_ENV === "producction"){
        transporter.sendMail(opcoesEmail, (error, info) => {
            if(error){
                console.log(error);
                return cb("Aconteceu um erro no envio do email, tente novamente.");
            } else {
                return cb(null, "Link para redefinicao de senha foi enviado com sucesso para seu email");
            }
        });
    } else {
        console.log(opcoesEmail);
        return cb(null, "Link para a redefinicao de senha foi enviado com sucesso para seu email.");
    }
}