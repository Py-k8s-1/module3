import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Details from "../pages/Home";
import List from "../pages/List";
import ItemNmes from "../pages/Item";
import Enquire from "../pages/Enquire";

const AppRoute=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Details} exact />
            <Route path="/courselist" component={List} exact />
            <Route path="/enquire" component={Enquire} exact />





        </Switch>
        </BrowserRouter>
    )
}

export default AppRoute