import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("home page");
    res.send("home page");
  } catch (err) {
    console.log("Error: goHome: ", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin page");
    res.send("getLogin page");
  } catch (err) {
    console.log("Error: getLogin: ", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup page");
    res.send("getSignup page");
  } catch (err) {
    console.log("Error: getSignup: ", err);
  }
};

export default restaurantController;
