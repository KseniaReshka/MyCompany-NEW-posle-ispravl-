import React from "react";
import { Route, Switch } from "react-router-dom";
 import NavBar from "./components/navBar";
//  import UserList from "./components/userList";
 import Main from "./components/main";
import Login from "./components/login";
import { UserLayouts } from "./userLayouts";

function App() {
    return (
        <div className="btn mt-2">
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                 <Route path="/users/:userId?" render={() => <UserLayouts />} />
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    );
}
export default App;
