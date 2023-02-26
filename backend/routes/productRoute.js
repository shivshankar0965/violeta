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

router
  .route("/product/new")
  .post(isAuthenticateUser, authorizeRole("admin"), createProduct);

router
  .route("/product/newimage")
  .post(isAuthenticateUser, authorizeRole("admin"), addImages);
router
  .route("/product/:id")
  .put(isAuthenticateUser, authorizeRole("admin"), updateProducts)
  .delete(isAuthenticateUser, authorizeRole("admin"), deleteProduct);
router.route("/product/:id").get(getProductsDetails);

router.route("/review").put(isAuthenticateUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticateUser, deleteReview);
module.exports = router;
