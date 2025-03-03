import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import RootLayout from './pages/RootLayout';
import WinesList from './pages/WinesList';
import WineDetail from './pages/WineDetail';
import { wineLoader, winesLoader } from './loaders/loaders';
import { signinAction, signupAction } from './loaders/actions';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
