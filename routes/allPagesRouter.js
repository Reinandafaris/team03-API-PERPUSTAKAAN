const router = require("express").Router();

const pageController = require("../controllers/allPagesController");

router.get("/", pageController.HomePage);
router.get("/login", pageController.LoginPage);
router.get("/register", pageController.RegisterPage);
router.get("/admin", pageController.AdminPage);

module.exports = router;
