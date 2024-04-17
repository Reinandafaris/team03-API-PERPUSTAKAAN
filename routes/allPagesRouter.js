const router = require("express").Router();

const pageController = require("../controllers/allPagesController");

router.get("/", pageController.HomePage);

module.exports = router;
