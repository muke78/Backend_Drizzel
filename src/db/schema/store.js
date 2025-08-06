import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const storeTable = pgTable('store', {
  id: uuid('id').defaultRandom().primaryKey(),
  nombre: varchar('nombre', { length: 100 }).notNull(),
  direccion: varchar('direccion', { length: 255 }),
  responsable: varchar('responsable', { length: 100 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
