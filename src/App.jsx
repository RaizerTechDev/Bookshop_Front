import Home from "./components/Home";
import { Plus } from "phosphor-react";
/* eslint-disable jsx-a11y/alt-text */
import "./styles.css";
import { Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
          />
        </a>
        <img
          className="Books"
          src="https://media.giphy.com/media/7SKUx7FY83GEMk9t08/giphy.gif"
          alt="livros"
        />
      </div>
      <h1>BOOKSHOP TECH RR76</h1>
    
      <div className="input-container">
        <Form>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Buscar" />
           <button title="+">
            <Plus Circle size={26} color="#FFFFFF" weight="bold" />
          </button>
        </Form>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
