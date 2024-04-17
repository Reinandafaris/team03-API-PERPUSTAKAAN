const router = require("express").Router();

const { User } = require("../controllers/userController");

const userController = require("../controllers/userController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");

router.get("/", autentikasi, userController.findUsers);
router.get("/:id", autentikasi, userController.findUserById);
router.patch(
  "/:id",
  autentikasi,
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  upload.array("images"),
  userController.updateUser
);
router.delete(
  "/:id",
  autentikasi,
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  userController.deleteUser
);

module.exports = router;
