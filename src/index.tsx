import { HashRouter, useRoutes } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css'
import routes from './router';
const App = () => <>{useRoutes(routes)}</>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<HashRouter>
  <App />
</HashRouter>)
