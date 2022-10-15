/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";
import { Plus, Star, NotePencil, Trash } from "phosphor-react";
import { Form } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nomelivro: "",
      livros: [
        {
          Nome: " O Dilema da Inovação",
          Autor: "Clayton M. Christensen",
          Descrição:
            "Dificuldade que as grandes Empresas tem de acompanhar o mercado.",
          Avaliação: (
            <button title="Avaliar">
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
            </button>
          ),
        },

        {
          Nome: "Os Inovadores",
          Autor: "Isaacson Walter",
          Descrição: "Entender melhor o processo de inovação.",
          Avaliação: (
            <button title="Avaliar">
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
            </button>
          ),
        },

        {
          Nome: "A Quarta Revolução Industrial",
          Autor: "Klaus Schwab",
          Descrição: "Novas tecnologias e o mundo digital.",
          Avaliação: (
            <button title="Avaliar">
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
            </button>
          ),
        },

        {
          Nome: "Transformação Digital",
          Autor: "David L. Rogers",
          Descrição: "Adaptando-se a era digital.",
          Avaliação: (
            <button title="Avaliar">
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
              <Star size={15} color="FFFFFF" weight="fill" />
            </button>
          ),
        },

        {
          Nome: "Avalie o que importa",
          Autor: "John Doerr",
          Descrição: "Sistema de objetivos e resultados-chaves(OKRs).",
          Avaliação: (
            <button title="Avaliar">
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={20} color="#0D3A06" weight="duotone" />
              <Star size={15} color="FFFFFF" weight="fill" />
            </button>
          ),
        },
      ],
    };
  }

  renderTabela() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Autor</th>
            <th>Descrição</th>
            <th>Avaliação</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {this.state.livros.map((livro) => (
            <tr>
              <td> {livro.Nome} </td>
              <td>{livro.Autor}</td>
              <td> {livro.Descrição}</td>
              <td> {livro.Avaliação}</td>
              <td>
                <button onClick={() => this.cadastarLivro(livro.id)}>
                  <NotePencil size={20} color="#09D81E" weight="fill" />
                </button>
                <button onClick={() => this.deletarLivro(livro.id)}>
                  <Trash size={20} color="#D80909" weight="bold" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  buscanomelivro = (e) => {
    this.setState({
      nomelivro: e.target.value,
    });
  };

  submit() {
    const nome = {
      nomelivro: this.state.nomelivro,
    };
    this.envia(nome);
  }
  renderHome() {
    return (
      <div className="input-container">
        <Form>
          <Form.Control
            type="text"
            placeholder="Buscar"
            value={this.state.nomelivro}
            onChange={this.buscanomelivro}
          />

          <button title="submit" onClick={this.submit}>
            <Plus Circle size={26} color="#FFFFFF" weight="bold" />
          </button>
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div>
          <img
            className="Perfil"
            src="https://github.com/RafaRz76Dev.png"
            alt="admin"
          />
          <a
            className="Whatsapp"
            href="https://api.whatsapp.com/send/?phone=47999327137"
          >
            <img
              src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
              target="-blank"
            />{" "}
          </a>
          <img
            className="Books"
            src="https://media.giphy.com/media/7SKUx7FY83GEMk9t08/giphy.gif"
            alt="livros"
          />
          <h1>BOOKSHOP TECH RR76</h1>
        </div>
        {this.renderHome()}
        {this.renderTabela()}
      </div>
    );
  }
}

export default Home;
