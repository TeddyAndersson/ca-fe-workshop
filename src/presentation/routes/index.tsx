import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import TodoPage from '../pages/Todo';

// Hooks
import { useTodo } from '../hooks/useTodo';

const Routes = () => {
  // Define public routes
  const publicRoutes = [
    {
      path: '/',
      element: <TodoPage useTodo={useTodo} />,
    },
  ];

  const router = createBrowserRouter([...publicRoutes]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
