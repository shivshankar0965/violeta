const express = require("express");
const { isAuthenticateUser, authorizeRole } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(isAuthenticateUser, newOrder);
router.route("/order/:id").get(isAuthenticateUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticateUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticateUser, authorizeRole("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticateUser, authorizeRole("admin"), updateOrder)
  .delete(isAuthenticateUser, authorizeRole("admin"), deleteOrder);
module.exports = router;
