import { Migration } from '@mikro-orm/migrations';

export class Migration20260303025216 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" alter column "show_name" type varchar(255) using ("show_name"::varchar(255));`);
    this.addSql(`alter table "price_listing" alter column "show_name" drop not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" alter column "show_name" type varchar(255) using ("show_name"::varchar(255));`);
    this.addSql(`alter table "price_listing" alter column "show_name" set not null;`);
  }

}
