
import Login from './login';
import Register from './register'
import Sidebar from './Component/sidebar';
import Welcome from './welcome';
import { BrowserRouter, Routes, Route,useRoutes } from "react-router-dom";
import allData from './Redux/store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ListOfEmploye from './Pages/listOfEmploye'
import Profile from './Pages/profile';
import Post from './Pages/post';
import Gallary from './Pages/gallary';
import Todo from './Pages/todo';
const store = createStore(allData)

function App(props) {
  const routesConfig=useRoutes( [{
    path: '/', element: <Login />
  },
  { path: '/sidebar', element: <ListOfEmploye /> },
    {
      path: '/sidebar',
      element: <Sidebar/>,
      children: [
        // The index route defines what should be displayed
        // on the default route i.e. '/'
        { path: '/sidebar/profile', element: <Profile/> },
        { path: '/sidebar/post', element: <Post/> },
        { path: '/sidebar/gallary', element: <Gallary/> },
        { path: '/sidebar/todo', element: <Todo/> },
      ],
    },
  ]);
  return (
  <Provider store={store}>
{routesConfig}
     </Provider>
    )
}

export default App;
