import {Response, Request} from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {

  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
}
