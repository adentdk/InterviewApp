import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigation from './../../navigations/RootNavigation';
import users from './users';

const router = createNavigationReducer(RootNavigation);

const appReducer = {
  router,
  users
}

export default appReducer