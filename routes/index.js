const router = require("express").Router();

const AllPages = require("./allPagesRouter");
const Auth = require("./authRouter");

// route pages
router.use("/", AllPages);

// route api
router.use("/api/v1/auth", Auth);

module.exports = router;
