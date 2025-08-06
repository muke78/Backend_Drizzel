import { Router } from 'express';
import {
  getAllStore,
  deleteStore,
  getFoundStores,
  postStore,
  updateStore,
} from '../controllers/store.controllers.js';
const router = Router();

router.get('/', getAllStore);
router.get('/:id', getFoundStores);
router.post('/', postStore);
router.put('/:id', updateStore);
router.delete('/:id', deleteStore);

export default router;
