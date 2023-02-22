import { Router } from 'express';
import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategory';

export const router = Router();

// List category
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// List product
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create product
router.post('/products', (req, res) => {
  res.send('OK');
});

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
