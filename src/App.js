import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import Users from './containers/Users';
import Pizza from './containers/Pizza';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Template</h1>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}></Route>
                    <Route path="/pizza" exact component={Pizza}></Route>
                </div>

            </div>
        )
    }
}

export default App;