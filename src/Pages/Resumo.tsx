// Importa o componente GraficoVendas do arquivo "../Components/GraficoVendas"
import GraficoVendas from "../Components/GraficoVendas";

// Importa o hook useData do arquivo "../Context/DataContext"
import { useData } from "../Context/DataContext";

// Define um componente funcional chamado Resumo
const Resumo = () => {
  // Utiliza o hook useData para obter os dados do contexto
  const { data } = useData();

  // Se os dados ainda não foram carregados, retorna null
  if (data === null) return null;

  // Renderiza uma seção contendo informações sobre as vendas e um gráfico de vendas
  return (
    <section>
      {/* Renderiza um conjunto de caixas (divs) contendo informações sobre as vendas */}
      <div className="resumo flex mb">
        {/* Caixa contendo informações sobre o total de vendas */}
        <div className="box">
          <h2>Vendas</h2>
          {/* Exibe o total de vendas formatado como moeda brasileira */}
          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        {/* Caixa contendo informações sobre o valor recebido */}
        <div className="box">
          <h2>Recebido</h2>
          {/* Exibe o valor recebido formatado como moeda brasileira */}
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        {/* Caixa contendo informações sobre o valor em processamento */}
        <div className="box">
          <h2>Processando</h2>
          {/* Exibe o valor em processamento formatado como moeda brasileira */}
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      {/* Renderiza uma caixa contendo o componente GraficoVendas com os dados */}
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

// Exporta o componente Resumo para ser utilizado em outras partes da aplicação
export default Resumo;

/*
O código define um componente funcional chamado Resumo que exibe informações resumidas sobre as vendas.
Utiliza o hook useData para obter os dados do contexto.
Se os dados ainda não foram carregados, retorna null.
Renderiza uma seção com três caixas (box) contendo informações sobre o total de vendas, valor recebido e valor em processamento.
Utiliza o componente GraficoVendas para renderizar um gráfico de vendas com os dados.
Os valores são filtrados e somados com base no status da venda e formatados como moeda brasileira antes de serem exibidos.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
