
import './App.css';
import Header from './Component/Header/Header';

import Home from './Pages/Home';

import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
// import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';






function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
       
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/allofyou">
              <Home></Home>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
         
            
          

          </Switch>
     

      </BrowserRouter>
      </AuthProvider>

    
    </div>
  );

}


export default App;
