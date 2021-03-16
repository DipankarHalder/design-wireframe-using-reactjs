import Login from '../pages/authentication/Login';
import Profile from '../pages/profile/Profile';

const PathRouter = [
  { path: '/', component: Login },
  { path: '/:id', component: Profile }
];

export default PathRouter;