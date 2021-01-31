import { SchemaObject } from 'openapi3-ts';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { Injectable } from '@nestjs/common';

type Schemas = {
  [key: string]: SchemaObject;
};

let schemas: Schemas;
function getSchemas() {
  if (!schemas) {
    schemas = validationMetadatasToSchemas();
  }
  return schemas;
}

@Injectable()
export class SchemaService {
  getSchemas() {
    return {
      schemas: getSchemas(),
    };
  }
}
