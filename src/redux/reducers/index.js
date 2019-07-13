import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigation from './../../navigations/RootNavigation';
import users from './users';
import questions from './questions'

const router = createNavigationReducer(RootNavigation);

const appReducer = {
  router,
  users,
  questions
}

export default appReducer