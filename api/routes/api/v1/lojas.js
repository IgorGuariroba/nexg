const router            = require("express").Router();
const lojaValidation    = require("../../../controllers/validacoes/lojaValidation");
const auth              = require("../../auth");
const UsuarioController = require("../../../controllers/LojaController");

const lojaController =  new UsuarioController();

router.get("/", lojaController.index);
router.get("/:id", lojaController.show);

router.post("/", auth.required, lojaController.store);
router.put("/:id", auth.required, lojaValidation, lojaController.update);
router.delete("/:id", auth.required, lojaValidation, lojaController.remove);



module.exports = router;

