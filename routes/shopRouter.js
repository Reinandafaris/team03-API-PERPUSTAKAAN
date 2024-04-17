const router = require("express").Router();

const { Shop } = require("../models");

const shopController = require("../controllers/shopController");

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
  shopController.createShop
);
router.get("/", autentikasi, shopController.findShops);
router.get(
  "/:id",
  autentikasi,
  checkId(Shop),
  shopController.findShopById
);
router.patch(
  "/:id",
  autentikasi,
  checkId(Shop),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  upload.array("images"),
  shopController.updateShop
);
router.delete(
  "/:id",
  autentikasi,
  checkId(Shop),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  shopController.deleteShop
);

module.exports = router;
