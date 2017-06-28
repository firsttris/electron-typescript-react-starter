import * as React from 'react';
const {
    MemoryRouter,
    Route,
    Switch
} = require('react-router-dom');

import Tracking from './../container/Tracking/Tracking'
import Users from './../container/UserManagement/Users'
import CreateUser from './../container/UserManagement/CreateUser'
import UpdateUser from './../container/UserManagement/UpdateUser'
import Nav from './../container/Navigation/Nav'

interface Props {
}

interface State {
}

class Routing extends React.Component<Props, State> {


    render() {
        return (
            <MemoryRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path="/users" component={Users}/>
                        <Route path="/createUser" component={CreateUser}/>
                        <Route path="/updateUser" component={UpdateUser}/>
                        <Route component={Tracking}/>
                    </Switch>
                </div>
            </MemoryRouter>
        );
    }
}

export default Routing;
