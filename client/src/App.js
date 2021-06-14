import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/userAction";
import { useEffect } from "react";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import TopBar from "./Components/topbar/TopBar";
import Register from "./Pages/register/Register";
import Write from "./Pages/write/Write";

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            dispatch(current());
        }
    }, [token,dispatch]);
    return (
        <div>
            <TopBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/settinges" component={Settings} />
                <Route path="/write" component={Write} />
            </Switch>
        </div>
    );
}

export default App;
