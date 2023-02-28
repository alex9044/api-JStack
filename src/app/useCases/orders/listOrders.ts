import {Response, Request} from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {

  const orders = await Order.find()
    .sort({ createAt: 1 }) // 1 ordena de Desc, -1 ordena de Asc
    .populate('products.product');

  res.json(orders);
}
