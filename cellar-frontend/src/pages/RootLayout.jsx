import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <body className="flex flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
}

export default RootLayout;
