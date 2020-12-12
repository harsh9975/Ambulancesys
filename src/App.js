import { Container } from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPass from './components/ForgotPass';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './contexts/AuthContexts';

export default function App() {
  return (
   
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          Hello
          <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPass} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
   

  );
}


