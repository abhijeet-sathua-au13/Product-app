
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import { routes } from '../routes/routes';
import './App.css';
// import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        {routes.map((route,index) => {
          return <Route key={index} {...route} />
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
