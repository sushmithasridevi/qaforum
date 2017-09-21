import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import Login from './components/Login.js';
//import Home from './components/Home.js';
//import Signup from './components/signup.js';
import Landingpage from './components/Landingpage/landingpage';
import IndividualQuestion from './components/ReactLandingpage/individualquestion.js';
import Reactlandingpage from './components/ReactLandingpage/reactlandingpage';
import Editor from './components/ReactLandingpage/texteditor.js';


ReactDOM.render(<MuiThemeProvider>
<Router>
  <div>
    {/*}<Route exact path="/" component={Landingpage} />*/}
    <Route path="/individualquestion" component={IndividualQuestion}/>
    <Route path="/" component={Reactlandingpage} />
    <Route path="/editor" component={Editor} />
  </div>
</Router>
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
