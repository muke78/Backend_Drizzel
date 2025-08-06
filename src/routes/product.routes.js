import { Router } from 'express';
import {
  deleteProduct,
  getAllProduct,
  getFoundProducts,
  postProduct,
  updateProduct,
} from '../controllers/products.controllers.js';

const router = Router();

router.get('/', getAllProduct);
router.get('/', getFoundProducts);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
