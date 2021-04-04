import React from 'react'
import MainPage from "./pages/MainPage.jsx";
import CarReservation from "./pages/CarReservation.jsx";
import ModelsPage from "./pages/ModelsPage.jsx";
import AdditionalPage from './pages/AdditionalPage.jsx'
import {Route, Switch} from "react-router";
import "./styles/index.scss"

export default function () {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/carreservation" component={CarReservation} />
            <Route path="/modelspage" component={ModelsPage} />
            <Route path="/additional" component={AdditionalPage} />
        </Switch>
    )
}