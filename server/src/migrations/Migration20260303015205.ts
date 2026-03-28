import { Migration } from '@mikro-orm/migrations';

export class Migration20260303015205 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "show_info" alter column "display" type boolean using ("display"::boolean);`);
    this.addSql(`alter table "show_info" alter column "display" set default false;`);

    this.addSql(`alter table "price_listing" add column "show_name" varchar(255) not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "show_info" alter column "display" type boolean using ("display"::boolean);`);
    this.addSql(`alter table "show_info" alter column "display" set default true;`);

    this.addSql(`alter table "price_listing" drop column "show_name";`);
  }

}
