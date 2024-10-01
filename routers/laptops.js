const {Router} = require("express")
const httpLaptop = require("../controllers/laptops")

const router = Router()

router.get("/", httpLaptop.getListarLaptops)

router.get("/:id", httpLaptop.getListarId)

router.post("/", httpLaptop.postLaptop)

router.put("/:id", httpLaptop.putLaptop)

router.put("/inactivar/:id", httpLaptop.putInactivarLaptop)

router.put("/activar/:id", httpLaptop.putInactivarLaptop)

router.put("/qrcode/:id", httpLaptop.putQRCode)

module.exports = router