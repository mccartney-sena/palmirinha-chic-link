import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Contact from './pages/Contact'
import ContactLink from './pages/ContactLink'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" children={<Contact />} />
          <Route path="/:contact" children={<ContactLink />} />
        </Switch>
      </>
    </Router>    
  );
}
export default App;
