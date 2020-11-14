const router            = require("express").Router();
const auth              = require("../../controllers/UsuarioController");
const UsuarioController = require("../../../controllers/UsuarioController");

const UsuarioController =  new UsuarioController();


router.get("/", auth.require, UsuarioController.index);
router.get("/:id", auth.require, UsuarioController.show);

router.post("/login", usuarioController.login);
router.post("/registrar", usuarioController.store);
router.put("/", auth.require, usuarioController.update);
router.delete("/", auth.require, usuarioController.remove);


router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

module.exports = router;

