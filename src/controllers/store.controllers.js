import { db } from '../lib/db.js';
import { store } from '../models/store.js';
import { eq } from 'drizzle-orm';

export const getAllStore = async (req, res) => {
  try {
    const getAllStore = await db.query.store.findMany({
      with: {
        products: true,
      },
    });
    res.json(getAllStore);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFoundStores = async (req, res) => {
  try {
    const storesFound = await db.query.store.findFirst({
      where: (store, { eq }) => eq(store.id, req.params.id),
      with: {
        products: true,
      },
    });
    res.json(storesFound);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postStore = async (req, res) => {
  try {
    const newStore = await db.insert(store).values(req.body).returning();
    res.json(newStore);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStore = async (req, res) => {
  try {
    const updateStore = await db
      .update(store)
      .set({ updatedAt: new Date() }, req.body)
      .where(eq(store.id, req.params.id))
      .returning();

    res.json(updateStore);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStore = async (req, res) => {
  try {
    const storeDelete = await db
      .delete(store)
      .where(eq(store.id, req.params.id))
      .returning();

    res.json(storeDelete);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
