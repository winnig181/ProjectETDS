import React from 'react';

type LoaderProps = {
  children: JSX.Element;
  isLoading: boolean;
};

export default function Loader({ isLoading, children }: LoaderProps): JSX.Element {
  if (isLoading) return <div>Loading...</div>;
  return children;
}
