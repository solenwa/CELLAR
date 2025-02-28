import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import RootLayout from './pages/RootLayout';
import WinesList, { winesLoader } from './pages/WinesList';
import WineDetail, { wineLoader } from './pages/WineDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'allwines',
        loader: winesLoader,
        element: <WinesList />,
        children: [
          {
            path: ':wineId',
            element: <WineDetail />,
            loader: wineLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
