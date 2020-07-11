import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  database: 'charithpg',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  username: 'postgres',
  password: 'zone@123',
};
