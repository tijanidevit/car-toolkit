import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import store from '../features/store';

function Layout() {
  return (
    <>
      <Provider store={store}>
        <Navigation />

          <Outlet />
      </Provider>
    </>
  );
}

export default Layout;