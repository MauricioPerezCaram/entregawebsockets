import { Router } from "express";
import products from "../../data/fs/products.fs.js";

const registerRouter = Router();

registerRouter.get("/", (req, res, next) => {
  try {
    return res.render("register", { title: "REGISTER" });
  } catch (error) {
    next(error);
  }
});

export default registerRouter;
