import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from '../pages/signup';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Welcome } from '../pages/welcome';
import { ProtectedRoutes } from '../components/protectedRoutes';
import { Profile } from '../pages/profile';
import { Favourites } from '../pages/favourites';
import { Player } from '../pages/player';
import { PlayerBar } from '../components/layout/playerBar';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PlayerBar />}>
          <Route
            path="/welcome"
            element={<ProtectedRoutes component={Welcome} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoutes component={Profile} />}
          />
          <Route
            path="/favourites"
            element={<ProtectedRoutes component={Favourites} />}
          />
          <Route path="/player" element={<ProtectedRoutes component={Player} />} />
        </Route>
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
  );
};

export default AppRoutes;
