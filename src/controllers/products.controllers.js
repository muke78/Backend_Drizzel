import { eq } from 'drizzle-orm';
import { db } from '../lib/db.js';
import { products } from '../models/products.js';

export const getAllProduct = async (req, res) => {
  try {
    const getAllProduct = await db.query.products.findMany();
    res.json(getAllProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFoundProducts = async (req, res) => {
  try {
    const getAllProduct = await db.query.products.findFirst({
      where: (products, { eq }) => eq(products.id, req.params.id),
    });
    res.json(getAllProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postProduct = async (req, res) => {
  try {
    const newProduct = await db.insert(products).values(req.body).returning();
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updateProduct = await db
      .update(products)
      .set({ updatedAt: new Date() }, req.body)
      .where(eq(products.id, req.params.id))
      .returning();

    res.json(updateProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await db
      .delete(products)
      .where(eq(products.id, req.params.id))
      .returning();

    res.json(deleteProduct);
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
