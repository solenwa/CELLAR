import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import RootLayout from './pages/RootLayout';
import WinesList from './pages/WinesList';
import WineDetail from './pages/WineDetail';
import { wineLoader, winesLoader } from './loaders/loaders';
import { signinAction, signupAction, logoutAction } from './loaders/actions';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';
import MyCellarPage from './pages/MyCellarpage';
import { tokenLoader } from './utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'allwines',
        children: [
          {
            path: '',
            loader: winesLoader,
            element: <WinesList />,
          },

          {
            path: ':wineId',
            id: 'product-detail',
            loader: wineLoader,
            element: <WineDetail />,
          },
        ],
      },
      {
        path: 'signin',
        element: <Signinpage />,
        action: signinAction,
      },
      {
        path: 'signup',
        element: <Signuppage />,
        action: signupAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      { path: 'macave',
        loader: winesLoader,
         element: <MyCellarPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
