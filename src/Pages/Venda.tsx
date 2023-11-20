// Importa o módulo React da biblioteca "react"
import React from "react";

// Importa o hook useParams do módulo "react-router-dom" para obter os parâmetros da URL
import { useParams } from "react-router-dom";

// Importa o hook useFetch do arquivo "../Hooks/useFetch"
import useFetch from "../Hooks/useFetch";

// Importa o componente Loading do arquivo "../Components/Loading"
import Loading from "../Components/Loading";

// Define um tipo VendaSemData que omite a propriedade "data" do tipo IVenda
type VendaSemData = Omit<IVenda, "data">;

// Define um componente funcional chamado Venda
const Venda = () => {
  // Obtém o parâmetro "id" da URL usando o hook useParams
  const { id } = useParams();

  // Utiliza o hook useFetch para obter os dados da venda com base no ID
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  // Se os dados ainda estão sendo carregados, renderiza o componente Loading
  if (loading === true) return <Loading />;

  // Se os dados ainda não foram carregados, retorna null
  if (data === null) return null;

  // Renderiza informações sobre a venda
  return (
    <div>
      {/* Renderiza um bloco (box) contendo o ID da venda */}
      <div className="box mb">ID: {data.id}</div>
      {/* Renderiza um bloco (box) contendo o nome da venda */}
      <div className="box mb">Nome: {data.nome}</div>
      {/* Renderiza um bloco (box) contendo o preço da venda formatado como moeda brasileira */}
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      {/* Renderiza um bloco (box) contendo o status da venda */}
      <div className="box mb">Status: {data.status}</div>
      {/* Renderiza um bloco (box) contendo o método de pagamento da venda */}
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

// Exporta o componente Venda para ser utilizado em outras partes da aplicação
export default Venda;

/*
O código define um componente funcional chamado Venda que exibe detalhes sobre uma venda com base no ID fornecido na URL.
Utiliza o hook useParams do react-router-dom para obter o parâmetro "id" da URL.
Utiliza o hook useFetch para obter os dados da venda com base no ID fornecido.
Se os dados ainda estão sendo carregados, renderiza o componente Loading.
Se os dados ainda não foram carregados, retorna null.
Renderiza informações sobre a venda, incluindo ID, nome, preço (formatado como moeda brasileira), status e método de pagamento.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
