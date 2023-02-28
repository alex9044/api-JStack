import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategory';
import { createProducts } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductByCategory';
import { createOrder } from './app/useCases/orders/createOrder';
import { listOrders } from './app/useCases/orders/listOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// diskStorge armazena arquivos na maquina
// onde o aplicativo esta sendo executado
// Multer utilizado para manipular arquivos
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
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
router.post('/products', upload.single('image'), createProducts);

// List product by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List order
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel order
router.delete('/orders/:orderId', cancelOrder);
