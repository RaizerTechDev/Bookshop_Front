import "./styles.css";
import { Star,  NotePencil, Trash } from "phosphor-react";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
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
          )},

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
            )},

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

  componentDidMount() {
    this.buscarLivro();
  }
  
    buscarLivro(){
    fetch(" http://localhost:3000/livros")
    .then(resposta => resposta.json())
    .then(dados => {
      this.setState({ livros : dados})
    })};
       
   
 deletarLivro = (id) => {
  fetch(" http://localhost:3000/livros/"+id, {method: 'DELETE'})
  .then(resposta => {
   if(resposta.ok){
    this.buscarLivro()
   }
})};     

carregarDados = (id) => {
  fetch(" http://localhost:3000/livros/"+id, {method: 'GET'})
  .then(resposta => resposta.json())
  .then(dados => {
    this.setState({ livros : dados})   
})};   

cadastarLivro = (livro) =>{
  fetch(" http://localhost:3000/livros", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(livro)
  })
    .then(resposta => {
      if (resposta.ok){
        this.buscarLivro();
      } else {
        alert('Não foi possível adicionar o livro!');
      } 
  })}

  render() {
    return (
     
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Autor</th>
              <th>Descrição</th>
              <th>Avaliações</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {this.state.livros.map((livro) => (
              <tr>
                <td> {livro.Nome} </td>
                <td>{livro.Autor}</td>
                <td> {livro.Descrição}</td>
                <td> {livro.Avaliação}</td>
                <td> <button onClick={() => this.cadastarLivro(livro.id)}>
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
  }}
  

export default Home;
