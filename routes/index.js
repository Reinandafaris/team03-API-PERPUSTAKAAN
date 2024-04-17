const router = require("express").Router();

const HomePage = require("./allPagesRouter");
const Auth = require("./authRouter");

// route pages
router.use("/", HomePage);

// route api
router.use("/api/v1/auth", Auth);

module.exports = router;
