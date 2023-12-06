import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import   Home   from './Components/Home';
import  Products  from './Components/Products';
import Header from './Components/layout/Header';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import NotFound from './Components/NotFound';

function App() {
  return (

    <div className="App">
    <Header />
    
      <main>
        <Switch>
        <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
