import 'dotenv/config'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "prisma",
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  namingStrategy: new SnakeNamingStrategy(),
  subscribers: [],
})