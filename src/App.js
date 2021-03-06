import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/Home/Nav";
import NavMobile from "./components/mobile/Nav/NavMobile";
import HomeMobile from "./components/mobile/Home/HomeMobile";
import Home from "./components/Home/Home";
import Write from "./components/List/Write";
import List from "./components/List/List";
import Trash from "./components/Trash/Trash";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import OAuth2RedirectHandler from "./components/Login/OAuth2RedirectHandeler";
import Introduce from "./components/Home/Introduce";
import WriteUpdate from "./components/List/WriteUpdate";
import Error from "./components/error/Error";
import "./App.css";

const App = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:414px)",
    });

    return (
        <div className={isMobile ? "mobile_App" : "App"}>
            <BrowserRouter>
                {isMobile ? <NavMobile isMobile={isMobile} /> : <Nav />}
                {isMobile ? <Route exact path="/" component={HomeMobile} /> : <Route exact path="/" component={Home} />}
                {/* <Route exact path="/365" render={() => <Home isMobile={isMobile} />} /> */}
                <Route exact path="/write" component={Write} />
                <Route path="/write/:id" component={WriteUpdate} />
                <Route path="/list" component={List} />
                <Route path="/trash" component={Trash} />
                <Route path="/login" component={Login} />
                <Route path="/introduce" render={() => <Introduce isMobile={isMobile} />} />
                <Route exact path="/logoutRoute" component={Logout} />
                <Route path="/365Project/login/oauth_kakao" component={OAuth2RedirectHandler}></Route>
                <Route path="/error" component={Error} />
            </BrowserRouter>
        </div>
    );
};

export default App;
