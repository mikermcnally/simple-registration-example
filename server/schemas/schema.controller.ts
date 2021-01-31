import { Controller, Get } from '@nestjs/common';
import { SchemaService } from './schema.service';

@Controller()
export class SchemaController {
  constructor(private readonly schemaService: SchemaService) {}

  @Get('schemas')
  async getSchemas() {
    return JSON.stringify(this.schemaService.getSchemas());
  }
}
