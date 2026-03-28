import { defineConfig } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { ShowInfo } from "./show-info/show-info.entity";
import { PriceListing } from "./price-listing/price-listing.entity";


export default defineConfig({
    driver: PostgreSqlDriver, 
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '',
    dbName: 'broadway_prices',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['./**/*.entity.ts'],
    debug: true,
    extensions: [Migrator],
    highlighter: new SqlHighlighter()
})
