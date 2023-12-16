import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Input } from '@mui/material';

type PostFormProps = {
  // submitPostHandler:()=>void;
  wsPostSubmitHandler:() =>void;
}

export default function PostForm({ wsPostSubmitHandler }:PostFormProps ):JSX.Element {
  return (
    <FormControl onSubmit={wsPostSubmitHandler} style={{ width: '100%' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
      <Input name="body" defaultValue="Введите сообщение"  />
      </Box>
      <Button variant="outlined">Отправить </Button>
    </FormControl>
  );
}
