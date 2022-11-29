import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import PerCategory from './Pages/Home/Catagories/PerCategory/PerCategory';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Error from './Shared/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/product-under-category/:category',
          element: <PerCategory></PerCategory>,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
        }
      ]

    },
    {
      path: '*',
      element: <Error></Error>
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
