import {Response, Request} from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {

  const categories = await Category.find();

  res.json(categories);
}
