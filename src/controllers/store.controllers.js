import { db } from '../index.js';
import { store } from '../models/store.js';
import { eq } from 'drizzle-orm';

export const getAllStore = async (req, res) => {
  try {
    const getAllStore = await db.select().from(store);
    res.json(getAllStore);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFoundStores = async (req, res) => {
  const { id } = req.params;
  try {
    const storesFound = await db.select().from(store).where(eq(store.id, id));
    res.json(storesFound);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postStore = async (req, res) => {
  const { nombre, direccion, responsable } = req.body;
  try {
    const newStore = await db
      .insert(store)
      .values({
        nombre,
        direccion,
        responsable,
      })
      .returning();
    res.json(newStore);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStore = async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, responsable } = req.body;
  try {
    const updateStore = await db
      .update(store)
      .set({ nombre, direccion, responsable, updated_at: new Date() })
      .where(eq(store.id, id))
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
    const { id } = req.params;
    const storeDelete = await db
      .delete(store)
      .where(eq(store.id, id))
      .returning();
    res.json(storeDelete);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
