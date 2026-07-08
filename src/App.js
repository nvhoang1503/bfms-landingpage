import './App.css';
import { Routes, Route } from 'react-router-dom'
import Views from './views';
import GlobalStyle from './globalStyles';
import { Provider } from 'react-redux';
import store from 'core/redux/store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="h-full w-full relative">
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
