import React, {Suspense} from 'react';
import Loader from './components/Loader'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {getValueFromLocalStorage} from '../utils/Helpers'
import Home from './Home'
const Login = React.lazy(() => import('./auth/Login'));

const Routes = () => {

const  AuthRoute= ({ component: Component, ...rest }) => {
const isLoggedIn = getValueFromLocalStorage('userCredentials') ? true : false
	return (
		<Route
			{...rest}
			render={props => {
				if (isLoggedIn) props.history.goBack()
				return <Component {...props} />
			}}
		/>
	)
}

const  ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = getValueFromLocalStorage('userCredentials') ? true : false
	return (
		<Route
			{...rest}
			render={props => {
				if (!isLoggedIn) {
                    props.history.push({
                        pathname: '/login'
                    })
                }
				return <Component {...props} />
			}}
		/>
	)
}

const isLoggedIn = getValueFromLocalStorage('userCredentials') ? true : false
    return (
        <Suspense fallback={<Loader/>}>
         <BrowserRouter>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                    isLoggedIn ?
                      <Redirect to="/home" /> :
                      <Redirect to="/login" /> 
                    )
                }}
              />
              <AuthRoute path='/login' component={Login} exact/>
              <ProtectedRoute path='/home' component={Home}/>
          </Switch>
         </BrowserRouter>
        </Suspense>
        
    )
}

export default Routes;