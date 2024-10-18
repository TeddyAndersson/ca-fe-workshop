import express from "express";
import setupMiddlewares from "./config/middlewares";
import setupRoutes from "./config/routes";
import env from "@src/env";

const app = express();
setupMiddlewares(app)
setupRoutes(app);
app.listen(env.PORT, () => {
  console.log(`server running at http:://localhost:${env.PORT}`);
});


