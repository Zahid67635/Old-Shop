import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layout/DashboardLayout';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from './Pages/Dashboard/MyProducts/MyProducts';
import PerCategory from './Pages/Home/Catagories/PerCategory/PerCategory';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SellerSignUp from './Pages/SignUp/SellerSignUp';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SellerRoute from './PrivateRoute/SellerRoute/SellerRoute';
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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/product-under-category/:category',
          element: <PrivateRoute><PerCategory></PerCategory></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
        },
        {
          path: '/sellerSignUp',
          element: <SellerSignUp></SellerSignUp>
        },
        {
          path: 'buyerSignUp',
          element: <SignUp></SignUp>
        }
      ]

    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [

        {
          path: '/dashboard/myorders',
          element: <MyOrders></MyOrders>
        },
        {
          path: '/dashboard/myProducts',
          element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
        },
        {
          path: '/dashboard/addProduct',
          element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
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
