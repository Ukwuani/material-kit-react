import { StrictMode } from 'react';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import { store } from './rtk/store'
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';
import { fetchUsers } from './rtk/features/usersSlice'

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);
store.dispatch(fetchUsers())

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
