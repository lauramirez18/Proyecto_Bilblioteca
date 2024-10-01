const {Router} = require("express")
const httpHolder = require("../controllers/holders")

const router = Router()

router.get("/", httpHolder.getListarHolders)

router.get("/:id", httpHolder.getListarId)

router.post("/", httpHolder.postHolder)

router.put("/:id", httpHolder.putModificarHolder)

router.put("/activate/:id", httpHolder.putActivar)

router.put("/unactivate/:id", httpHolder.putInactivarHolder)

module.exports = router