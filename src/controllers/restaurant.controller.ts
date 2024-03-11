import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Error";

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
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup page");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO: SESSIONS AUTHENTICATION

    req.session.member = result;
    req.session.save(() => {
      res.send(result);
    });
  } catch (err) {
    console.log("Error: processSignup: ", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert('Hi, ${message}') window.location.replace('admin/signup')</script>`
    );
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin page");
    res.render("login");
  } catch (err) {
    console.log("Error: getLogin: ", err);
    res.redirect("/admin");
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin page");
    console.log("body", req.body);
    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    req.session.member = result;
    req.session.save(() => {
      res.send(result);
    });
  } catch (err) {
    console.log("Error: getLogin: ", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert('Hi, ${message}') window.location.replace('admin/login')</script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout page");
    req.session.destroy(() => {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error: logout: ", err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession page");
    if (req.session?.member)
      res.send(
        `<script> alert('Hi, ${req.session.member.memberNick}')</script>`
      );
    else res.send(`<script> alert('${Message.NOT_AUTHENTICATED}')</script>`);
  } catch (err) {
    console.log("Error: checkAuthSession: ", err);
    res.send(err);
  }
};
export default restaurantController;
