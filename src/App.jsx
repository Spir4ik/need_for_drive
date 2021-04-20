import React from 'react'
import {Route, Switch} from "react-router";
import RefreshRoute from "./components/RefreshRoute.jsx";
import MainPage from "./pages/MainPage.jsx";
import CarReservation from "./pages/CarReservation.jsx";
import ModelsPage from "./pages/ModelsPage.jsx";
import AdditionalPage from './pages/AdditionalPage.jsx';
import ResultPage from "./pages/ResultPage.jsx";
import OrderSuccessPage from "./pages/OrderSuccessPage.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import "./styles/index.scss"

export default function () {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/carreservation" component={CarReservation} />
            <RefreshRoute path="/modelspage" component={ModelsPage} />
            <RefreshRoute path="/additional" component={AdditionalPage} />
            <RefreshRoute path="/resultstage" component={ResultPage} />
            <Route path={`/${localStorage.getItem('id')}`} component={OrderSuccessPage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}