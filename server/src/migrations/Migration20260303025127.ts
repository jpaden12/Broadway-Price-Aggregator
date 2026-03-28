import { Migration } from '@mikro-orm/migrations';

export class Migration20260303025127 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" alter column "show_date_time" type timestamptz using ("show_date_time"::timestamptz);`);
    this.addSql(`alter table "price_listing" alter column "show_date_time" drop not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" alter column "show_date_time" type date using ("show_date_time"::date);`);
    this.addSql(`alter table "price_listing" alter column "show_date_time" set not null;`);
  }

}
