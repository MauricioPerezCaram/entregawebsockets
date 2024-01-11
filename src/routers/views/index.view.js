import { Router } from "express";

import productsRouter from "./products.view.js";
import usersRouter from "./users.view.js";

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  try {
    const mainproducts = ["iPhones", "Watches", "Macs", "iPads"];
    const date = new Date();
    return res.render("index", {
      products: mainproducts,
      date,
      title: "INDEX",
    });
  } catch (error) {
    next(error);
  }
});
viewsRouter.use("/real", productsRouter);
viewsRouter.use("/users", usersRouter);

export default viewsRouter;
