// Importa ícones e imagens da pasta "../assets/icons" e "../assets/FintechSVG"
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";

// Importa o componente NavLink do módulo "react-router-dom"
import { NavLink } from "react-router-dom";

// Define um componente funcional chamado Sidenav
const Sidenav = () => {
  // Retorna um elemento <nav> representando a barra lateral da aplicação
  return (
    <nav className="sidenav box bg-3">
      {/* Renderiza o componente FintechSVG com um título */}
      <FintechSVG title="Fintech Logo" />
      {/* Renderiza uma lista não ordenada (ul) contendo links para diferentes seções da aplicação */}
      <ul>
        {/* Renderiza um item da lista com um ícone e um link para a página de Resumo */}
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        {/* Renderiza um item da lista com um ícone e um link para a página de Vendas */}
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        {/* Renderiza um item da lista com um ícone e um link para a seção de Webhooks */}
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        {/* Renderiza um item da lista com um ícone e um link para a seção de Configurações */}
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        {/* Renderiza um item da lista com um ícone e um link para a seção de Contato */}
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>
        {/* Renderiza um item da lista com um ícone e um link para a opção de Sair */}
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

// Exporta o componente Sidenav para ser utilizado em outras partes da aplicação
export default Sidenav;

/*
Resumo e explicação

O código define um componente funcional chamado Sidenav que representa a barra lateral da aplicação.
Importa ícones e imagens da pasta "../assets/icons" e "../assets/FintechSVG".
Utiliza o componente FintechSVG para renderizar o logotipo da fintech.
Usa o componente NavLink do react-router-dom para criar links de navegação.
Renderiza uma lista não ordenada (ul) contendo itens da barra lateral, cada um com um ícone e um link.
Cada link está associado a uma rota específica, e alguns itens não possuem links (Webhooks, Configurações, Contato, Sair).
O componente é estilizado com a classe "sidenav box bg-3" e é exportado para ser utilizado em outras partes da aplicação.
*/
