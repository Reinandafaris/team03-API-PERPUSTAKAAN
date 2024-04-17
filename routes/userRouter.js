const router = require("express").Router();

const { User } = require("../controllers/userController");

const userController = require("../controllers/userController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");

router.post(
  "/",
  autentikasi,
  checkRole("Admin, Manager"),
  upload.array("images"),
  userController.createUser
);
router.get("/", autentikasi, userController.findUsers);
router.get(
  "/:id",
  autentikasi,
  checkId(User),
  userController.findUserById
);
router.patch(
  "/:id",
  autentikasi,
  checkId(User),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  upload.array("images"),
  userController.updateUser
);
router.delete(
  "/:id",
  autentikasi,
  checkId(User),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  userController.deleteUser
);

module.exports = router;
