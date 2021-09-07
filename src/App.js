import React from 'react';

import AdminLogin from "./screens/AdminLogin/AdminLogin.js";
import AdminDashboard from "./screens/AdminDashboard/AdminDashboard.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = ()=>{  return (
    <Router>

    <Switch>
      <Route exact path="/admin/login" component={AdminLogin} />

      <Route exact path="/admin/dashboard" component={()=><AdminDashboard title="Statistique" />} />

      <Route exact path="/admin/conference" component={()=><AdminDashboard title="Conferences" filter={
        ["Conférence en attente","Conférence acceptée"] 
      }  activeFilter={0} url="/conferences"  headers={[
        "Nom","Type","Date","N° de place","Responsable",null
      ]} />}  />

      <Route exact path="/admin/archeive" component={()=><AdminDashboard title="Archive" filter={
        ["Conférences","Articles","Utilisateurs"] 
      }  activeFilter={0} url="/archeives"  headers={[
        "Nom","Type","Date de suppresion","Responsable","admin",null
      ]} />} />


      <Route exact path="/admin/article" component={()=><AdminDashboard title="Articles" filter={
        [] 
      }  activeFilter={null} url="/articles"  headers={[
        "Nom","Type","Date","N° de page","Auteur",null
      ]} />}  />

       <Route exact path="/admin/utilisateur" component={()=><AdminDashboard title="Utilisateurs" filter={
        [] 
      }  activeFilter={null} url="/utilisateurs"  headers={[
        "Nom d'utilisateur","Profession","Date de naissance","E-mail",null
      ]} />}  />

      <Redirect to="/admin/dashboard" />
    </Switch>
    </Router>
    
  );
}






export default App;