import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import EditarUsuario from './pages/Usuario/editar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuarios" component={MainUsuario} />
            <Route path = "/usuarios/:id" component={DetalhesUsuario} />
            <Route path = "/criarUsuario" component={CriarUsuario} />
            <Route path = "/editarUsuario/:id" component={EditarUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;