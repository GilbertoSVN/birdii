import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => {
  return <TypeOrmModuleOptions>{
    type: 'sqlite',
    database: `${__dirname}/../../database/posterr.sq3`,
    entities: [`${__dirname}/../**/*.entity.ts`],
    migrations: [`${__dirname}/../migration/*.ts`],
    logging: false,
    cli: {
      migrationsDir: `src/migration`,
    },
  };
};
