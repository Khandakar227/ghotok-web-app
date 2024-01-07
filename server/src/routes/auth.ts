import { Router } from "express";
import AuthRouteHandler from "../controllers/auth";
import { Middleware } from "../libs/middleware";

const authRoutes = Router();

authRoutes.post("/login", Middleware.validateLogin, AuthRouteHandler.login);
authRoutes.post("/signup", AuthRouteHandler.signUp);

export default authRoutes;