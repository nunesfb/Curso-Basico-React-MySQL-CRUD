import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import moment from "moment";

export default class Livro extends Component {
    state = {
        livro: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/livros/${id}`)
            .then(livro =>
                livro.json().then(livro => this.setState({ livro }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { livro, index } = this.state;

        return (
            <div className="livro-info">
                <h1> {livro.nome} </h1>
                <h1> {livro.autor} </h1>
                <h1> {livro.isbn} </h1>
                <h1> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(livro.valor)} </h1>
                <h1> {moment(livro.dataLancamento).format('DD-MM-YYYY')} </h1>
                <br />
                <Link to={`/livros`}> Voltar </Link> <br />
                <Link to={`/editarlivro/${livro.id}`}> Editar </Link> <br />
                <Link to={`/deletarlivro/${livro.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}