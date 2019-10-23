import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livro: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3003/sistema/livros`)
            .then(livro =>
                livro.json().then(livro => this.setState({ livro }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { livro } = this.state;
        return livro.map((livro, index) => (

            <div className="livro-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{livro.nome}</h5>

                    <article key={livro._id}>
                        <strong> {livro.salario} </strong>
                        <p> <Link to={`/livros/${livro.id}`}> Acessar </Link> </p>
                        <br />
                    </article>
                </div>
            </div>
        ))
    };
}