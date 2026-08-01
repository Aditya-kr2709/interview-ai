// sare authentication wale routes rahenge

const {Router} = require('express')
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")
const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @describe Register new user
 * @access   public
 */
authRouter.post("/register",authController.registerUserController)
/**
 * @route  POST/ api/auth/login
 * @describe login user with email and password
 * @access public
 */

authRouter.post("/login",authController.loginUserController)

/**
 * @route GET/api/auth/logout
 * @describe clear token from user and ass the token in blacklist
 * @access public
 */

authRouter.get("/logout",authController.logoutUserController)

/**
 * @route GET/api/auth/get-me
 * @describe get the current logged in user details
 * @access private
 */

authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports = authRouter
