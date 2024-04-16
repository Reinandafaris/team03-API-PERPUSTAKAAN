const router = require("express").Router();

const Auth = require("../controllers/authController");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/me", Auth.authenticate);

module.exports = router;
