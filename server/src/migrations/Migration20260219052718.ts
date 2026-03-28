import { Migration } from '@mikro-orm/migrations';

export class Migration20260219052718 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "price_listing" drop constraint "price_listing_show_id_foreign";`);

    this.addSql(`alter table "price_listing" rename column "show_id" to "show_id_id";`);
    this.addSql(`alter table "price_listing" add constraint "price_listing_show_id_id_foreign" foreign key ("show_id_id") references "show_info" ("id") on update cascade;`);
    this.addSql(`create index "show_id" on "price_listing" ("show_id_id");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" drop constraint "price_listing_show_id_id_foreign";`);

    this.addSql(`drop index "show_id";`);

    this.addSql(`alter table "price_listing" rename column "show_id_id" to "show_id";`);
    this.addSql(`alter table "price_listing" add constraint "price_listing_show_id_foreign" foreign key ("show_id") references "show_info" ("id") on update cascade;`);
  }

}
