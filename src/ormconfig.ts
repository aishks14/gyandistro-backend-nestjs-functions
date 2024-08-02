import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'gyandistro',
    password: 'aishodc@WIP555',
    database: 'gyandistro',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}

export default config;