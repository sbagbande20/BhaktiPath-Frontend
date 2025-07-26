import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('jwt'); // or however you manage auth
  return token ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
