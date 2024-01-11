import { Router } from "express";

import productsRouter from "./products.view.js";
import formRouter from "./form.view.js";
import registerRouter from "./register.view.js";

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
viewsRouter.use("/form", formRouter);
viewsRouter.use("/register", registerRouter);

export default viewsRouter;
