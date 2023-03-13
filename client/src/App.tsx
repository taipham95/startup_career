import * as React from 'react';
import ApplyPage from "./pages/ApplyPage/ApplyPage";
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function App() {
  // 2. Use at the root of your app
  return (
      <ApplyPage/>
  );
}

export default App;
