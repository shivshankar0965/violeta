const express = require("express");
// const { isAuthenticateUser, authorizeRole } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(newOrder);
router.route("/order/:id").get(getSingleOrder);
router.route("/orders/me").get(myOrders);
router.route("/admin/orders").get(getAllOrders);
router.route("/admin/order/:id").put(updateOrder).delete(deleteOrder);
module.exports = router;
