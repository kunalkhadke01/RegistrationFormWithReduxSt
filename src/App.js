import './login.css';
import Login from './login';
import allData from './Redux/store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(allData)
function App(props) {
  return (
  <Provider store={store}>
    <Login {...props}/>
     </Provider>
    )
}

export default App;
