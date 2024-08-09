import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import "reflect-metadata";
import { TagEntity } from "./tag/tag.entity";
const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'gyandistro',
    password: 'aishodc@WIP555',
    database: 'gyandistro',
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    entities: [TagEntity],
    synchronize: true
}

export default config;