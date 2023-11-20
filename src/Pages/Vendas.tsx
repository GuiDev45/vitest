// Importa o hook useData do arquivo "../Context/DataContext"
import { useData } from "../Context/DataContext";

// Importa o componente VendaItem do arquivo "../Components/VendaItem"
import VendaItem from "../Components/VendaItem";

// Define um componente funcional chamado Vendas
const Vendas = () => {
  // Utiliza o hook useData para obter os dados do contexto
  const { data } = useData();

  // Se os dados ainda não foram carregados, retorna null
  if (data === null) return null;

  // Renderiza uma lista não ordenada (ul) contendo itens de venda usando o componente VendaItem
  return (
    <ul>
      {/* Mapeia os dados de venda e renderiza um item de venda para cada um */}
      {data.map((venda) => (
        <li key={venda.id}>
          {/* Renderiza o componente VendaItem, passando a propriedade "venda" */}
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

// Exporta o componente Vendas para ser utilizado em outras partes da aplicação
export default Vendas;

/*
O código define um componente funcional chamado Vendas que exibe uma lista de itens de venda.
Utiliza o hook useData para obter os dados do contexto.
Se os dados ainda não foram carregados, retorna null.
Renderiza uma lista não ordenada (ul) contendo itens de venda.
Utiliza o método map para iterar sobre os dados de venda e renderizar um componente VendaItem para cada venda.
A propriedade key é utilizada para garantir uma identificação única para cada item na lista.
O componente VendaItem é importado e renderizado para cada venda na lista.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
