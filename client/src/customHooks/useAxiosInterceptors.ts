import { useEffect } from 'react';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hook';

import { thunkAuthRefresh } from '../redux/slices/auth/createAsyncThunk';

export default function useAxiosInterceptors(apiService): void {
  const auth = useAppSelector((store) => store.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = apiService.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );
    const responseInterceptor = apiService.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkAuthRefresh()).unwrap();
          console.log('----->newAccessToken', newAccessToken);
          prevRequest.headers.Authorization = `Bearer ${newAccessToken.accessToken}`;
          return apiService(prevRequest);
        }
        return Promise.reject(err);
      },
    );
    return () => {
      apiService.interceptors.request.eject(requestInterceptor);
      apiService.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken]);
}
