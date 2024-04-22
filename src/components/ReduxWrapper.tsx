'use client'

import React from 'react'
import { store } from "@/state/store";
import { Provider } from 'react-redux';

const ReduxWrapper = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
          {children}
    </Provider>
  )
}

export default ReduxWrapper