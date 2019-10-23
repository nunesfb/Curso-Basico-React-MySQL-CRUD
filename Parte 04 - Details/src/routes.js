import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuarios" component={MainUsuario} />
            <Route path = "/usuarios/:id" component={DetalhesUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;