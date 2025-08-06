CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"descripcion" varchar,
	"precio" numeric(10, 2) DEFAULT '0.00' NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"storeId" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "store" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"direccion" varchar(255),
	"responsable" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_storeId_store_id_fk" FOREIGN KEY ("storeId") REFERENCES "public"."store"("id") ON DELETE cascade ON UPDATE no action;