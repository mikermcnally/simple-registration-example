import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './create-registration.dto';
import { Registration } from '../entities/registration';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrations_repository: Repository<Registration>,
  ) {}

  async createRegistration(dto: CreateRegistrationDto) {
    const registration = new Registration();
    registration.first_name = dto.first_name;
    registration.last_name = dto.last_name;
    registration.address1 = dto.address1;
    registration.address2 = dto.address2;
    registration.city = dto.city;
    registration.state = dto.state;
    registration.zip = dto.zip;
    registration.country = dto.country;
    return this.registrations_repository.save(registration);
  }

  async getRegistrations() {
    return this.registrations_repository.find();
  }
}
