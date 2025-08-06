import { relations } from 'drizzle-orm';
import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { products } from './products.js';

export const store = pgTable('store', {
  id: uuid('id').defaultRandom().primaryKey(),
  nombre: varchar('nombre', { length: 100 }).notNull(),
  direccion: varchar('direccion', { length: 255 }),
  responsable: varchar('responsable', { length: 100 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export const storeRelations = relations(store, ({ many }) => ({
  products: many(products), 
}));