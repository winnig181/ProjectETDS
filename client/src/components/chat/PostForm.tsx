import React, { FormEvent, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import {Button,TextField } from '@mui/material';
import { thunkPostsAdd, thunkPostsLoad } from '../../redux/slices/posts/createAsyncThunk';
import type { AddPostFormData } from '../../types/post/post';
import { useAppDispatch } from '../../redux/hook';
import { thunkCheckAuth } from '../../redux/slices/auth/createAsyncThunk';

type PostFormProps = {
  // submitPostHandler:()=>void;
  wsPostSubmitHandler:(e:FormEvent<HTMLFormElement>) =>void;
}

export default function PostForm({ wsPostSubmitHandler }:PostFormProps ):JSX.Element {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // void dispatch(thunkCheckAuth());
  //   void dispatch(thunkPostsLoad());
  // }, []);

  return (
    <form 
    onSubmit={(e) => {
      e.preventDefault();
      // const formData = Object.fromEntries(
      //   new FormData(e.currentTarget),
      // ) as unknown as AddPostFormData;
      // void dispatch(thunkPostsAdd(formData));
      // void dispatch(thunkPostsLoad());
      wsPostSubmitHandler(e);
      e.currentTarget.reset();
    }}>
    <FormControl sx={{ width: '100%' }}>
    <TextField name="body" label="Текст сообщения" type="text" /> 
      <Button type="submit" variant="contained">Отправить </Button>
    </FormControl>
    </form>
  );
}
