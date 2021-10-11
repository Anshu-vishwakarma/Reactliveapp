import React from 'react'
import Header from './Header';
import Menu from './Menu';
import { Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/Reactliveapp" component={Header}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/checkout" component={Checkout}/>
        </Switch>
        </>
    )
}

export default App;
// "homepage": "http://Anshu-vishwakarma.github.io/reactaapp",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"