const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticateUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticateUser, getUserDetails);
router.route("/me/update").put(isAuthenticateUser, updateProfile);
router.route("/password/update").put(isAuthenticateUser, updatePassword);
router
  .route("/admin/users")
  .get(isAuthenticateUser, authorizeRole("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticateUser, authorizeRole("admin"), getSingleUser)
  .put(isAuthenticateUser, authorizeRole("admin"), updateUserRole)
  .delete(isAuthenticateUser, authorizeRole("admin"), deleteUser);
module.exports = router;
