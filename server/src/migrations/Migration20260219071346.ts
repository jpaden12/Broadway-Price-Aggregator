import { Migration } from '@mikro-orm/migrations';

export class Migration20260219071346 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" drop column "show_time";`);

    this.addSql(`alter table "price_listing" rename column "show_date" to "show_date_time";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" add column "show_time" time(0) not null;`);
    this.addSql(`alter table "price_listing" rename column "show_date_time" to "show_date";`);
  }

}
