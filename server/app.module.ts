import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Connection } from 'typeorm';
import { Registration } from './entities/registration';
import { RegistrationModule } from './registration/registration.module';
import { SchemaModule } from './schemas/schema.module';

@Module({
  imports: [
    RegistrationModule,
    SchemaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      port: 5432,
      entities: [Registration],
      synchronize: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'build'),
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
