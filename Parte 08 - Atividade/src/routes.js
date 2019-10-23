import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLivro from './pages/Livro/main';
import DetalhesLivro from './pages/Livro/detalhes';
import CriarLivro from './pages/Livro/criar';
import EditarLivro from './pages/Livro/editar';
import DeletarLivro from './pages/Livro/deletar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/Livros" component={MainLivro} />
            <Route path = "/Livros/:id" component={DetalhesLivro} />
            <Route path = "/criarLivro" component={CriarLivro} />
            <Route path = "/editarLivro/:id" component={EditarLivro} />
            <Route path = "/deletarLivro/:id" component={DeletarLivro} />
        </Switch>
    </BrowserRouter>
)

export default Routes;