import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () =>
  <TypeOrmModuleOptions>{
    type: 'sqlite',
    database: `${__dirname}/../../database/posterr.sq3`,
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    migrations: [`${__dirname}/../migration/*.{js,ts}`],
    logging: false,
    cli: {
      migrationsDir: `src/migration`,
    },
  };
