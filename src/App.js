import React from 'react';

import AdminLogin from "./screens/AdminLogin/AdminLogin.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = ()=>{
  return (
    <Router>
    <Switch>
      {/* //? admin routes */}
      <Route exact path="/admin/login" component={AdminLogin} />
      
      <Redirect to="/admin/login" />
    </Switch>
    </Router>
    
  );
}






export default App;