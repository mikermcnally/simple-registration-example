import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from '../entities/registration';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

@Module({
  providers: [RegistrationService],
  controllers: [RegistrationController],
  imports: [TypeOrmModule.forFeature([Registration])],
})
export class RegistrationModule {}
