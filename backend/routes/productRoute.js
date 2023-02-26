const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductsDetails,
  createProductReview,
  deleteReview,
  getProductReviews,
  addImages,
} = require("../controllers/productController");
const { isAuthenticateUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();
router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/newimage").post(addImages);
router.route("/product/:id").put(updateProducts).delete(deleteProduct);
router.route("/product/:id").get(getProductsDetails);

router.route("/review").put(createProductReview);

router.route("/reviews").get(getProductReviews).delete(deleteReview);
module.exports = router;
