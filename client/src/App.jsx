import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import { NavLink, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/wrappers/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Error,
    HomeLayout,
    Homepage,
    Login,
    Upload,
    Register,
    MainGallery,
    Gallery,
    Profile,
    UserProfile,
    EditProfile,
    DashboardLayout,
    ViewImage,
    EditImage,
} from './pages';

 
import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import { loader as dashboardLoader } from './pages/DashboardLayout'
import { action as profileAction } from './pages/Profile'
import {action as uploadAction } from './pages/Upload'
import {action as deleteImageAction } from './pages/DeleteImage'
import { loader as editImageLoader } from './pages/EditImage'
import { action as editImageAction } from './pages/EditImage'
import { loader as userProfileLoader } from './pages/UserProfile'
import { action as editProfileAction } from './pages/EditProfile';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'profile',
        loader: dashboardLoader,
        element: <Profile />,
        action: profileAction,
      },
      {
        path: 'user-profile/:userId',
        loader: userProfileLoader,
        element: <UserProfile />,
        action: profileAction,
      },
      {
        path: 'edit-profile',
        element: <EditProfile />,
        action: editProfileAction,
      },   
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <MainGallery />,
          },
          {
            path: 'upload',
            element: <Upload />,
            action: uploadAction,
          },
          {
            path: 'images/:imageId',
            element: <ViewImage />,
          },  
          {
            path: 'gallery',
            element: <Gallery />,
          },
          {
            path: 'delete-images/:imageId',
            action: deleteImageAction,
          },
          {
            path: 'edit-images/:imageId',
            element: <EditImage />,
            loader: editImageLoader,
            action: editImageAction,
          },
        ],
      },
    ],
  },
]);


  const App = () => {
    return (
      <>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </>
    );
  };
  

export default App;
