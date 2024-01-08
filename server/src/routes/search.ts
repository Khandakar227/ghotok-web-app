import { Router } from "express";
import SearchRouteHandler from "../controllers/search";

const searchRoute = Router();

searchRoute.get("/", SearchRouteHandler.search);

export default searchRoute;