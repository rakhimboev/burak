import express, { Request, Response } from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

routerAdmin.get("/product/all", productController.getAllProducts);
export default routerAdmin;
