import {Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {

  try {

    const imagePath = req.file?.filename;
    const { name, price, description, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      category,
      price: Number(price),
      // ? Verifica se tem valores dentro de ingredients
      ingredients: ingredients ? JSON.parse(ingredients): []
    });

    res.status(201).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
