import { Migration } from '@mikro-orm/migrations';

export class Migration20260429210700 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" add column "date_last_updated" timestamptz not null default '2026-04-29T21:07:00.050Z';`);
    this.addSql(`alter table "price_listing" alter column "fixed" type boolean using ("fixed"::boolean);`);
    this.addSql(`alter table "price_listing" alter column "fixed" set default false;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" drop column "date_last_updated";`);

    this.addSql(`alter table "price_listing" alter column "fixed" drop default;`);
    this.addSql(`alter table "price_listing" alter column "fixed" type bool using ("fixed"::bool);`);
  }

}
