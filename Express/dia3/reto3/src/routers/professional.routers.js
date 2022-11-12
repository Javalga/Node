const { Router } = require("express");
const router = Router();
const {
  getProfessional,
  postProfessional,
  putProfessional,
  deleteProfessional,
  getProfessionals,
  postIntoProfessionals,
  putProfessionals,
  deleteProfessionals,
} = require("../controller/professional.controller");

//get
router.get("/professional", getProfessional);
router.get("/professionals", getProfessionals);

//post
router.post("/professional", postProfessional);
router.post("/professionals", postIntoProfessionals);

//put
router.put("/professional", putProfessional);
router.put("/professionals", putProfessionals);

//del
router.delete("/professional", deleteProfessional);
router.delete("/professionals", deleteProfessionals);

module.exports = router;
