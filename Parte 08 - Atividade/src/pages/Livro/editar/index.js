import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarLivro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livro: {
                nome: "",
                autor: "",
                valor: "",
                dataLancamento: "",
                isbn: "true"
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/livros/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ livro: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/livros" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Usuário</legend>
                        <div className="livro-insert">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.livro.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="autor">Autor </label>
                            <br />
                            <input
                                type="text"
                                id="autor"
                                name="autor"
                                placeholder="Autor"
                                required
                                value={this.state.livro.autor}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="isbn">ISBN </label>
                            <br />
                            <input
                                type="number"
                                id="isbn"
                                name="isbn"
                                placeholder="Autor"
                                required
                                value={this.state.livro.isbn}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="valor">Valor </label>
                            <br />
                            <input
                                type="text"
                                id="valor"
                                name="valor"
                                placeholder="valor"
                                required
                                value={this.state.livro.valor}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="dataLancamento">Data de Lançamento </label>
                            <br />
                            <input
                                type="text"
                                id="dataLancamento"
                                name="dataLancamento"
                                placeholder="Data de Nascimento"
                                required
                                value={this.state.livro.dataLancamento}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Atualizar
                    </button>
                    </fieldset>
                </form>
            );
        }
    }


    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            livro: { ...prevState.livro, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.livro;

        fetch(`http://localhost:3003/sistema/livros/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.livro),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default EditarLivro;
