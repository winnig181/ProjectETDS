import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { apiReviewsService } from "./services/reviewService";
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
import LkMyDealsPage from './pages/LkMyDealsPage';
import LkMyItemsPage from './pages/LkMyItemsPage';
import useAxiosInterceptors from './customHooks/useAxiosInterceptors';
import Loader from './components/hocs/Loader';
import { apiItemsService } from './services/items';
import { apiDealsService } from './services/deals';
import SubCatPage from './pages/SubCatPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);

  useAxiosInterceptors(apiReviewsService);
  useAxiosInterceptors(apiItemsService);
  useAxiosInterceptors(apiDealsService);

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkItemsLoad());
  }, []);

  return (
    <Loader isLoading={auth.user.status === 'pending'}>
      <>
        <NavBar />
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories/:id" element={<SubCatPage />} />  
          {/* <Route path="/subcategories/:id" element={<Размап карточек items одной категории />} />         */}

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
                redirectPath="/login"/>
          }>
            <Route path="/lk" element={<LkPage />} />
            <Route path="/lk/profile" element={<LkProfile />} />
            <Route path="/lk/reviews" element={<LkReviewsPage />} />
            <Route path="/lk/my-items" element={<LkMyItemsPage />} />
            <Route path="/lk/my-deals" element={<LkMyDealsPage />} />
          </Route>
        </Routes>
      </>
    </Loader>
  );
}

export default App;
