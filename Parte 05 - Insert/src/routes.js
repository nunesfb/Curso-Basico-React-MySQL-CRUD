import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuarios" component={MainUsuario} />
            <Route path = "/usuarios/:id" component={DetalhesUsuario} />
            <Route path = "/criarUsuario" component={CriarUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;