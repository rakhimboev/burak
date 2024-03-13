import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Error";

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("Get all products");
    res.render("products");
  } catch (err) {
    console.log("Error Get all products: ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    res.render("products");
  } catch (err) {
    console.log("Error createNewProduct: ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    res.render("products");
  } catch (err) {
    console.log("Error updateChosenProduct: ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
