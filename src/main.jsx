import ReactDOM from 'react-dom/client'
import './index.css'

//import the React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Bring in the pages for router use
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';

//Define the routes
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'portfolio',
          element: <PortfolioPage />,
        },
        {
          path: 'about',
          element: <ResumePage />,
        },        
        {
            path: 'resume',
            element: <AboutPage />,
          },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
