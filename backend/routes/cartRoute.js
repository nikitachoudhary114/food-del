import express from 'express'
import { addToCart, removeFromCart, listCartItems } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';
const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart)
cartRouter.post('/remove', authMiddleware, removeFromCart)
cartRouter.post('/list', authMiddleware, listCartItems)

export default cartRouter;