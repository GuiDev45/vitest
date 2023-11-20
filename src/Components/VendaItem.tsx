// Importa o componente NavLink do módulo "react-router-dom"
import { NavLink } from "react-router-dom";

// Define um componente funcional chamado VendaItem que recebe uma propriedade venda do tipo IVenda
const VendaItem = ({ venda }: { venda: IVenda }) => {
  // Retorna um elemento <div> representando um item de venda
  return (
    <div className="venda box">
      {/* Renderiza um link de navegação NavLink associado à rota específica da venda */}
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {/* Exibe o ID da venda dentro do link */}
        {venda.id}
      </NavLink>
      {/* Renderiza um elemento <div> contendo o nome da venda */}
      <div>{venda.nome}</div>
      {/* Renderiza um elemento <div> contendo o preço da venda formatado como moeda brasileira */}
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

// Exporta o componente VendaItem para ser utilizado em outras partes da aplicação
export default VendaItem;

/*
Resumo e explicação

O código define um componente funcional chamado VendaItem que representa um item de venda.
Utiliza o componente NavLink do react-router-dom para criar um link de navegação associado a uma rota específica da venda.
O componente recebe a propriedade venda do tipo IVenda.
Renderiza um elemento <div> com a classe "venda box" que contém informações sobre a venda, incluindo o ID, o nome e o preço.
O ID da venda é exibido como um link de navegação, e o preço é formatado como moeda brasileira.
O componente é estilizado com a classe "venda box" e é exportado para ser utilizado em outras partes da aplicação.
*/
