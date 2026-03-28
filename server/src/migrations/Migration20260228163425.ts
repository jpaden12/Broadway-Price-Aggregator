import { Migration } from '@mikro-orm/migrations';

export class Migration20260228163425 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "show_info" add column "display" boolean not null default true;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "show_info" drop column "display";`);
  }

}
