import { ConnectionOptions } from 'typeorm';
import { environment } from '@/consts/envs';
const database = {
  development: process.env.POSTGRES_DB || 'api',
};
const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB || database[environment],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  dropSchema: false,
  synchronize: true,
  migrationsRun: true,
};
export = typeormConfig;
