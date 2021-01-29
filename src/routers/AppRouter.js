import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Cart } from '../components/pages/Cart';
import { EcommerceScreen } from '../components/EcommerceScreen';
import { Navbar } from '../components/ui/Navbar';
import { SingleProduct } from '../components/pages/SingleProduct';

export const AppRouter = () => {
    return (

    <Router>

        <Navbar/>

        <Switch>
          <Route exact path="/products/:idPhone" component={SingleProduct}/>
          <Route exact path="/cart" component={Cart}/>

          <Route exact path="/ecommerce-app" component = {EcommerceScreen} />

          <Redirect to="/ecommerce-app"/>
        </Switch>

    </Router>

    )
}
