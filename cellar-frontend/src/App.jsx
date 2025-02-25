import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import RootLayout from './pages/RootLayout';
import WinesList from './pages/WinesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/allwines', element: <WinesList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
