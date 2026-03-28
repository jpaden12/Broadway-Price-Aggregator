import { Migration } from '@mikro-orm/migrations';

export class Migration20260219041320 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "show_info" ("id" serial primary key, "show_name" varchar(255) not null, "venue" varchar(255) not null, "address" varchar(255) not null, "website" varchar(255) not null, "type" text check ("type" in ('Play', 'Musical', 'Revue', 'Concert', 'Opera', 'Other')) not null, "level" text check ("level" in ('Broadway', 'Off-Broadway', 'Off-Off-Broadway', 'West End', 'Tour', 'Regional', 'Other')) not null, "runtime" int null, "opening_date" timestamptz not null, "closing_date" timestamptz null, "closed" boolean not null);`);

    this.addSql(`create table "price_listing" ("id" serial primary key, "show_id" int not null, "site_name" varchar(255) not null, "price" numeric(10,2) not null, "show_date" date not null, "show_time" time(0) not null, "show_time_period" varchar(255) not null, "date_of_capture" timestamptz not null, "fixed" boolean not null);`);

    this.addSql(`alter table "price_listing" add constraint "price_listing_show_id_foreign" foreign key ("show_id") references "show_info" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "price_listing" drop constraint "price_listing_show_id_foreign";`);

    this.addSql(`drop table if exists "show_info" cascade;`);

    this.addSql(`drop table if exists "price_listing" cascade;`);
  }

}
