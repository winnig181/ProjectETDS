import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import NavBar from './components/NavBar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import OneNotePage from './pages/OneNotePage';
import { useAppDispatch, useAppSelector } from './redux/hook';
import NotesPage from './pages/NotesPage';
import { apiNotesService } from './services/notes';

import { thunkNotesLoad } from './redux/slices/notes/createAsyncThunk';
import { thunkAuthRefresh, thunkCheckAuth } from './redux/slices/auth/createAsyncThunk';
import MainPage from './pages/MainPage';
import LkPage from './pages/LkPage';
import Profile from './components/lk/Profile';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkNotesLoad());
  }, []);

  useEffect(() => {
    const requestInterceptor = apiNotesService.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );
    const responseInterceptor = apiNotesService.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        console.log('prevRequest>>>>>>>>>>>:', prevRequest);
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkAuthRefresh()).unwrap();
          console.log('----->newAccessToken', newAccessToken);
          prevRequest.headers.Authorization = `Bearer ${newAccessToken.accessToken}`;
          return apiNotesService(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiNotesService.interceptors.request.eject(requestInterceptor);
      apiNotesService.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken]);

  return (

      <>
        <NavBar />  
        <Routes>
          <Route path="/" element={<MainPage />} />
          
          <Route
            element={
              <PrivateRouter isAllowed={auth.user.status === 'authenticated'} redirectPath="/" />
            }
          >
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>

          <Route
            element={
              <PrivateRouter
                isAllowed={auth.user.status !== 'authenticated'}
                redirectPath="/login"
              />
            }
          >
            <Route path="/notes" element={<NotesPage />} />     
            <Route path="/:noteId" element={<OneNotePage />} />

          </Route>
            <Route path="/lk" element={<LkPage />} />
            <Route path="/lk/profile" element={<Profile text="ok"/>} />
        </Routes>
      </>

  );
}

export default App;
