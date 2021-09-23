import './App.css';
import './components/style.css';
import { Routes } from './Routes';
// import { Provider } from "react-redux";
import { store, persistor } from './components/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>

  );
}


export default App;
