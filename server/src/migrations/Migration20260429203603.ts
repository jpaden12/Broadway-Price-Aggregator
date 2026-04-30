import { Migration } from '@mikro-orm/migrations';

export class Migration20260429203603 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" add column "website" varchar(255) null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" drop column "website";`);
  }

}
