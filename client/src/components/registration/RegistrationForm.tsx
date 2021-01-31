import React from 'react';
import { useApi } from '../../hooks/use_api';
import SchemaForm from '../common/SchemaForm';

export default function RegistrationForm() {
  const { schemas, fetcher } = useApi();
  const schema = schemas ? schemas.CreateRegistrationDto : null;

  if (!schema) {
    return <div>Unable to retrieve form at this time</div>;
  } else {
    return (
      <SchemaForm
        label={'Please provide the following to register'}
        schema={schema}
        submit={(model: any) => fetcher.post('/registration', model)}
        onSuccess={() => {}}
      />
    );
  }
}
