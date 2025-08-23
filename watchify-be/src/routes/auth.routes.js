const { signUpCtrl, loginCtrl } = require("../controllers/authCtrl/auth.ctrl");

const router = require("express").Router();

router.post("/signup", signUpCtrl);
router.post("/login", loginCtrl);

module.exports = router;
