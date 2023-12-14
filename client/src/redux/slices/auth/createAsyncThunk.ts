/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginFormData, SignupFormData } from '../../../types/auth';
import AuthService from '../../../services/authService';


export const thunkLogin = createAsyncThunk('authSlice/thunkLogin', async(formData:LoginFormData)=>
AuthService.login(formData));

export const thunkSignUp = createAsyncThunk('authSlice/thunkSignUp', async(formData:SignupFormData)=>
AuthService.signup(formData));

export const thunkLogout = createAsyncThunk('authSlice/thunkLogout', async()=>
AuthService.logout());

export const thunkCheckAuth = createAsyncThunk('authSlice/thunkCheckAuth', async()=>
AuthService.check());

export const thunkAuthRefresh = createAsyncThunk('authSlice/thunkAuthRefresh', async()=>
AuthService.refresh());