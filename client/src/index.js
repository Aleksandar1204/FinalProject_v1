  
import ReactDOM from 'react-dom'
import React from 'react'


import NewProduct from './components/newProduct/NewProduct'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'



const app = document.getElementById('app')


const Routes = () => {
    return (
        <Router>
            
            <Switch>
               
                <Route exact path='/newproduct'  component={NewProduct}/>
                
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, app)