import { Response, Request } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {

  try {
    const { categoryId } = req.params;

    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
}
