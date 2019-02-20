import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import Home from './pages/Home.jsx';
import Mine from './pages/Mine.jsx';
import Upload from './pages/Upload.jsx';
import Search from './pages/Search.jsx';
import {withRouter} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={withRouter(Home)} />
                    <Route path="/mine" component={withRouter(Mine)} />
                    <Route path="/upload" component={withRouter(Upload)} />
                    <Route path="/search" component={withRouter(Search)} />
                </Switch>
            </Router>
        )
    }

}
export default App;

ReactDOM.render(<App />, document.getElementById('root'))