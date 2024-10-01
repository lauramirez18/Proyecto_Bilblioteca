const {Router} = require("express")
const httpEntry = require("../controllers/entrys")

const router = Router()

router.post("/", httpEntry.postEntry)

router.get("/", httpEntry.getlistarEntrys)

router.get("/holder/:id", httpEntry.getListarporHolder)

router.get("/dia", httpEntry.getListarporDia)

router.get("/fecha", httpEntry.getListarentryEntreFechas)

router.put("/salida/:id", httpEntry.putRegistrarEntradaOutput)

module.exports = router