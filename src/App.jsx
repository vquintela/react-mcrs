import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Inicio from './components/Inicio'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Sede from './components/sede/Sede'
import Usuarios from './components/usuarios/Usuarios'
import EditUsuario from './components/usuarios/EditUsuario'
import PrivateRoute from './components/routing/PrivateRoute';
import PublicRoute from './components/routing/PublicRoute';
import userContext from './context/user/userContext';
import Vehiculos from './components/vehiculos/Vehiculos';
import AddVehiculo from './components/vehiculos/AddVehiculo';

function App() {
  const { loadUser, isLoading } = useContext(userContext)
    
  useEffect(() => {
      loadUser()
      // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        isLoading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route path="/" component={Inicio} exact />
              <PublicRoute path="/signin" component={Signin} exact />
              <PublicRoute path="/signup" component={Signup} exact />
              <PrivateRoute path="/car" component={Vehiculos} exact />
              <PrivateRoute path="/addCar" component={AddVehiculo} exact />
              <PrivateRoute path="/sedes" component={Sede} exact />
              <PrivateRoute path="/usuarios" component={Usuarios} exact />
              <PrivateRoute path='/usuarios/:id'  component={EditUsuario} exact />
            </Switch>
          </>
        )
      }
    </>      
  );
}

export default App;
