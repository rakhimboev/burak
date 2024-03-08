import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("home page");
    res.render("home");
  } catch (err) {
    console.log("Error: goHome: ", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup page");
    res.render("signup");

  } catch (err) {
    console.log("Error: getSignup: ", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup page");
    console.log("body: ", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);
    //TODO: SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error: processSignup: ", err);
    res.send(err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin page");
    res.render("login");

  } catch (err) {
    console.log("Error: getLogin: ", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin page");
    console.log("body", req.body);
    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    //TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error: getLogin: ", err);
    res.send(err);
  }
};

export default restaurantController;
