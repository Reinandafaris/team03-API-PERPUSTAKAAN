const router = require("express").Router();

const AllPages = require("./allPagesRouter");
const Auth = require("./authRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

// API Document
router.use("/api-docs", swaggerUi.serve);
router.use("/api-docs", swaggerUi.setup(swaggerDocument));

// route pages
router.use("/", AllPages);

// route api
router.use("/api/v1/auth", Auth);

module.exports = router;
