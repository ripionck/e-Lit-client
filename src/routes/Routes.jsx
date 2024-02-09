import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../Layout/Main';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Profile from '../pages/Profile/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import BookList from '../pages/BookList/BookList';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'book-list',
        element: <BookList />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'About',
        element: <About />,
      },
    ],
  },
]);
