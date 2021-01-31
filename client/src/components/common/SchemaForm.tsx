import React, { useState } from 'react';
import { Button, Container, FormLabel, Paper } from '@material-ui/core';
import Form from '@rjsf/material-ui';
import { JSONSchema7 } from 'json-schema';
import { useStyles } from '../../hooks/use_styles';

interface SchemaFormProps {
  label: string;
  schema: JSONSchema7;
  submit: (model: any) => Promise<any>;
  onSuccess: () => any;
}

export default function SchemaForm({
  label,
  schema,
  submit,
  onSuccess,
}: SchemaFormProps) {
  const classes = useStyles();
  const [model, setModel] = useState({} as any);
  const [pending, setPending] = useState<boolean>(false);

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.container}>
        <FormLabel>{label}</FormLabel>
        <Form
          schema={schema}
          formData={model}
          showErrorList={false}
          onChange={({ formData }) => {
            setModel(formData);
          }}
          onSubmit={async () => {
            try {            
              setPending(true);
              await submit(model);
              onSuccess();
            } catch (err) {
              setPending(false);
              console.log(err);
            }
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={pending}
          >
            Submit
          </Button>
        </Form>
      </Paper>
    </Container>
  );
}
