import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider'
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/Home/Services/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
