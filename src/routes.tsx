import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
import { useModel } from 'umi';
import styles from './app.less';
import NavBar from './components/NavBar';
import Bottom from './components/Bottom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Message from './pages/Message';
import PersonalCenter from './pages/PersonalCenter';

export default () => {
  const { title } = useModel('global', (model) => ({
    title: model.title,
  }));
  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar>{title}</NavBar>
        </div>
        <div className={styles.body}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/todo">
              <Todo />
            </Route>
            <Route exact path="/message">
              <Message />
            </Route>
            <Route exact path="/me">
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  );
};
