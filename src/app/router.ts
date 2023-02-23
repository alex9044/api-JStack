import { Router } from 'express';
import path from 'node:path';
import multer from 'multer';

import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategory';
import { createProducts } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProduct';

export const router = Router();

// diskStorge armazena arquivos na maquina
// onde o aplicativo esta sendo executado
// Multer utilizado para manipular arquivos
const upload = multer({
  storage: multer.diskStorage({
    destination(req, res, callback) {
      callback(null, path.resolve(__dirname, '../..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

// List category
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// List product
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image') ,createProducts);

// List product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List order
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
