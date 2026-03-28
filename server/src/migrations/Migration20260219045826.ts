import { Migration } from '@mikro-orm/migrations';

export class Migration20260219045826 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" add column "notes" varchar(255) null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" drop column "notes";`);
  }

}
