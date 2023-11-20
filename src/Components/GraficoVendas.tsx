// Importa componentes específicos do pacote "recharts"
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Função utilitária que transforma os dados de venda (IVenda[]) em um formato desejado (VendaDia[])
function transformData(data: IVenda[]): VendaDia[] {
  // Reduz o array de dados para um objeto onde as chaves são as datas e os valores são objetos VendaDia
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      // Inicializa um objeto VendaDia para a data se ainda não existir
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    // Atualiza os valores de acordo com o status da venda
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  // Converte o objeto de volta em um array de objetos VendaDia
  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

// Componente funcional GraficoVendas que recebe dados de vendas (IVenda[])
const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  // Transforma os dados utilizando a função utilitária transformData
  const transformedData = transformData(data);

  // Retorna um componente gráfico de linha utilizando a biblioteca "recharts"
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        {/* Define o eixo X com base na chave "data" nos dados */}
        <XAxis dataKey="data" />
        {/* Define o eixo Y */}
        <YAxis />
        {/* Adiciona uma dica flutuante (Tooltip) para mostrar informações ao passar o mouse sobre o gráfico */}
        <Tooltip />
        {/* Adiciona uma legenda (Legend) para identificar as linhas no gráfico */}
        <Legend />
        {/* Adiciona uma linha no gráfico para representar a venda paga */}
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        {/* Adiciona uma linha no gráfico para representar a venda em processamento */}
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        {/* Adiciona uma linha no gráfico para representar a venda com falha */}
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Exporta o componente GraficoVendas para ser utilizado em outros lugares da aplicação
export default GraficoVendas;

/*
Resumo e explicação

O código define um componente funcional chamado GraficoVendas que utiliza a biblioteca "recharts" para criar um gráfico de linha.
Uma função utilitária chamada transformData é definida para converter os dados de vendas (IVenda[]) em um formato adequado para o gráfico (VendaDia[]).
O componente renderiza um gráfico de linha que exibe informações sobre vendas pagas, em processamento e com falhas ao longo do tempo.
Diferentes cores e larguras de linha são usadas para distinguir entre os tipos de vendas.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
