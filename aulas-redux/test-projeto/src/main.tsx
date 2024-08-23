import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './redux/index.ts';
import './index.css'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
)