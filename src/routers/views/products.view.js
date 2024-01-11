import { Router } from "express";
import products from "../../data/fs/products.fs.js";

const productsRouter = Router();

productsRouter.get("/", (req, res, next) => {
  try {
    return res.render("real", { title: "REAL" });
  } catch (error) {
    next(error);
  }
});

export default productsRouter;
