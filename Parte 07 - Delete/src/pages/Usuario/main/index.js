import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3003/sistema/usuarios`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { usuario } = this.state;
        return usuario.map((usuario, index) => (

            <div className="usuario-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{usuario.nome}</h5>

                    <article key={usuario._id}>
                        <strong> {usuario.salario} </strong>
                        <p> <Link to={`/usuarios/${usuario.id}`}> Acessar </Link> </p>
                        <br />
                    </article>
                </div>
            </div>
        ))
    };
}