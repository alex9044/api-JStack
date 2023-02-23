import {Request, Response } from 'express';

export async function createProducts(req: Request, res: Response) {

  try {




    res.status(201).json();

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
