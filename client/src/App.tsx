import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import NavBar from './components/NavBar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hook';


import { thunkAuthRefresh, thunkCheckAuth } from './redux/slices/auth/createAsyncThunk';
import MainPage from './pages/MainPage';
import Sidebar from './components/SideBar';

import LkPage from './pages/LkPage';
import LkProfile from './components/lk/LkProfile';
import LkReviewsPage from './pages/LkReviewsPage';
import { thunkItemsLoad } from './redux/slices/items/createAsyncThunk';
import { thunkReviewsLoad } from './redux/slices/reviews/createAsyncThunk';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);


  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkItemsLoad());
    void dispatch(thunkReviewsLoad());

    // void dispatch(thunkNotesLoad());
  }, []);

  // useEffect(() => {
  //   const requestInterceptor = apiNotesService.interceptors.request.use(
  //     (config) => {
  //       if (!config.headers.Authorization) {
  //         config.headers.Authorization = `Bearer ${auth.accessToken}`;
  //       }
  //       return config;
  //     },
  //     (err) => Promise.reject(err),
  //   );
  //   const responseInterceptor = apiNotesService.interceptors.response.use(
  //     (res) => res,
  //     async (err: AxiosError & { config: { sent?: boolean } }) => {
  //       const prevRequest = err.config;
  //       console.log('prevRequest>>>>>>>>>>>:', prevRequest);
  //       if (err.response?.status === 403 && !prevRequest.sent) {
  //         prevRequest.sent = true;
  //         const newAccessToken = await dispatch(thunkAuthRefresh()).unwrap();
  //         console.log('----->newAccessToken', newAccessToken);
  //         prevRequest.headers.Authorization = `Bearer ${newAccessToken.accessToken}`;
  //         return apiNotesService(prevRequest);
  //       }
  //       return Promise.reject(err);
  //     },
  //   );
  //   return () => {
  //     apiNotesService.interceptors.request.eject(requestInterceptor);
  //     apiNotesService.interceptors.response.eject(responseInterceptor);
  //   };
  // }, [auth.accessToken]);

  return (

      <>
        <NavBar />  
        <Sidebar/>
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
            {/* <Route path="/notes" element={<NotesPage />} />     
            <Route path="/:noteId" element={<OneNotePage />} /> */}

          </Route>
            <Route path="/lk" element={<LkPage />} />
            <Route path="/lk/profile" element={<LkProfile />} />
            <Route path="/lk/reviews" element={<LkReviewsPage />} />
            
        </Routes>
      </>

  );
}

export default App;
