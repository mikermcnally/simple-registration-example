import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRegistrationDto } from './create-registration.dto';
import { RegistrationService } from './registration.service';

@Controller()
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('registration')
  async postRegistration(@Body() body: CreateRegistrationDto) {
    return this.registrationService.createRegistration(body);
  }

  @Get('admin/registrations')
  async getRegistrations() {
    const registrations = await this.registrationService.getRegistrations();
    return JSON.stringify(registrations);
  }
}
