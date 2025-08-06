import { decimal, pgTable, uuid, varchar, integer, timestamp} from 'drizzle-orm/pg-core';
import { storeTable } from './store.js';

export const productsTable = pgTable('products', {
  id: uuid().defaultRandom().primaryKey(),
  nombre: varchar('nombre', { length: 100 }).notNull(),
  descripcion: varchar('descripcion'),
  precio: decimal('precio', { precision: 10, scale: 2 })
    .default('0.00')
    .notNull(),
  stock: integer('stock').default(0).notNull(),
  storeId: uuid('storeId')
    .notNull()
    .references(() => storeTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
