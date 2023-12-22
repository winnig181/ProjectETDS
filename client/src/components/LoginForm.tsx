import { Box, Button, FormControl } from '@mui/material';
import React from 'react';
import CustomTextField from './CustomTextField/CustomTextField';
import type { LoginFormData } from '../types/auth';
import { useAppDispatch } from '../redux/hook';
import { thunkLogin } from '../redux/slices/auth/createAsyncThunk';

export default function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      
      <form onSubmit={
        (e)=>{
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
          void dispatch(thunkLogin(formData));
        }}>

        <FormControl
          sx={{
            padding: '10px',
            height: '200px',
            justifyContent: 'space-around',
            borderRadius: '12px',
            border: '3px solid #35CDCE',
          }}
        >
          <CustomTextField name="email" label="Почта" type="text" />
          <CustomTextField name="password" label="Пароль" type="password" />
          <Button type="submit">Войти</Button>
        </FormControl>
      </form>
    </Box>
  );
}