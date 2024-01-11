import { Router } from "express";
import products from "../../data/fs/products.fs.js";

const formRouter = Router();

formRouter.get("/", (req, res, next) => {
  try {
    return res.render("form", { title: "FORM" });
  } catch (error) {
    next(error);
  }
});

export default formRouter;
