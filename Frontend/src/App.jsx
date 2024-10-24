import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, Schedule, Profile, Logout, CleaningCompany, History } from './pages'

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
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
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            index: true,
            element: <Schedule />,
          },
          {
            path: 'company',
            element: <CleaningCompany />,
          },
          {
            path: 'history',
            element: <History />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'logout',
            element: <Logout />,
          },
        ],
      },

    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};
export default App; 