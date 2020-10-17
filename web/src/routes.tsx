import React from   'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageCreate from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

const Routes = ()=>{
    return(
      <BrowserRouter>
        <Route path="/" component={Landing} exact/>
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanage/create" component={OrphanageCreate} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </BrowserRouter>
    );
}

export default Routes;