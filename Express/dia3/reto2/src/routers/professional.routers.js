const { Router } = require("express");
const router = Router();
const {
  getProfessional,
  postProfessional,
  putProfessional,
  deleteProfessional,
} = require("../controller/professional.controller");

router.get("/professional", getProfessional);
router.post("/professional", postProfessional);
router.put("/professional", putProfessional);
router.delete("/professional", deleteProfessional);

module.exports = router;
