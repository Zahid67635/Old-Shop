import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
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

        // {
        //   path: '/blog',
        //   element: 
        // },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
