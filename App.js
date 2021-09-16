import './App.css';
import './components/style.css';
import { Routes } from './Routes';
// import { Provider } from "react-redux";
import { store } from './components/Store';
import { Provider } from 'react-redux';



function App() {


  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
}


export default App;
