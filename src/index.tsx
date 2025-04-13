import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Pages/App/App';
import { CreateQuarters } from './Pages/CreateQuarters/CreateQuarters';
import { ROUTES } from './common/constants';

// TODO add errorBoundary for 404 handling
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <App />,
    },
    {
        path: ROUTES.QUARTER_CREATION,
        element: <CreateQuarters />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
