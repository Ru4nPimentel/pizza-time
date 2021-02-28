import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bonus from './pages/Bonus/Bonus';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Pagamento from './pages/Pagamento/Pagamento';
import Pedido from './pages/Pedido/Pedido';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/pedido" component={Pedido} />
      <Route path="/pagamento" component={Pagamento} />
      <Route path="/bonus" component={Bonus} />
    </Switch>
  );
}
