import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AxiosError } from 'axios';
import NavBar from './components/NavBar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { thunkAuthRefresh, thunkCheckAuth } from './redux/slices/auth/createAsyncThunk';
import MainPage from './pages/MainPage';
import LkPage from './pages/LkPage';
import LkProfile from './components/lk/LkProfile';
import LkReviewsPage from './pages/LkReviewsPage';
import MyItemsList from './components/lk/MyItemsList';
import { thunkItemsLoad } from './redux/slices/items/createAsyncThunk';
import { thunkReviewsLoad } from './redux/slices/reviews/createAsyncThunk';
import { Container } from '@mui/material';
import { thunkDealsLoad } from './redux/slices/deals/createAsyncThunk';
import LkMyDealsPage from './pages/LkMyDealsPage';
import LkMyItemsPage from './pages/LkMyItemsPage';
import AddDealPage from './pages/AddDealPage';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkItemsLoad());
    void dispatch(thunkReviewsLoad());
    void dispatch(thunkDealsLoad());

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
  //         return  (prevRequest);
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
        {/* <Sidebar/> */}
        <Container style={{ marginTop: '84px' }}>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route element={<PrivateRouter isAllowed={auth.user.status === 'authenticated'} redirectPath="/" />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>

            <Route element={<PrivateRouter isAllowed={auth.user.status !== 'authenticated'} redirectPath="/login" />}> </Route>
            <Route path = "/addDeal" element = {<AddDealPage/>} />
            <Route path="/lk" element={<LkPage />} />
            <Route path="/lk/profile" element={<LkProfile />} />
            <Route path="/lk/reviews" element={<LkReviewsPage />} />
            <Route path="/lk/my-items" element={<LkMyItemsPage />} />
            <Route path="/lk/my-deals" element={<LkMyDealsPage />} />
              
          </Routes>
        </Container>
      </>

  );
}

export default App;
