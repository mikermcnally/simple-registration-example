import React, { useState } from 'react';
import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Paper,
} from '@material-ui/core';
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
  const [status, setStatus] = useState<'new' | 'pending' | 'error' | 'success'>(
    'new',
  );

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
              setStatus('pending');
              await submit(model);
              setStatus('success');
              onSuccess();
            } catch (err) {
              setStatus('error');
              console.log(err);
            }
          }}
          disabled={status === 'pending' || status === 'success'}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={status === 'pending' || status === 'success'}
          >
            {status === 'success' ? 'Success!' : 'Submit'}
          </Button>
        </Form>
      </Paper>
      <Backdrop className={classes.backdrop} open={status === 'pending'}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
