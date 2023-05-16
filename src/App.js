import './login.css';
import Login from './login';
import Register from './register'
import Welcome from './welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import allData from './Redux/store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(allData)
function App(props) {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/registration" element={<Register />} />
    <Route path="/welcome" element={<Welcome />} />
    </Routes>
    </BrowserRouter>
     </Provider>
    )
}

export default App;
