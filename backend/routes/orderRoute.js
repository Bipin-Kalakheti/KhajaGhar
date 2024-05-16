import express from "express";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
