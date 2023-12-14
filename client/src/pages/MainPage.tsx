/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useAppSelector } from '../redux/hook';

export default function MainPage(): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <>
      {auth.user.status !== 'authenticated' ? (
        <h1>
          EverNote MainPage for Guests only. <br/> Please <a href="/login"> login</a> to see main content
          of the website
        </h1>
      ) : (
        <h1>Welcome to the MainPage of the website</h1>
      )}
    </>
  );
}
